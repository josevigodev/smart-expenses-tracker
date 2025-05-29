import { useCallback, useMemo } from "react";

export function useData(expenses) {
  const formatData = useCallback((expenses) => {
    const categories = expenses.map((expense) => {
      return {
        category: expense.category,
        amount: Number(expense.amount),
      };
    });

    const grouped = categories.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }

      acc[item.category] += item.amount;
      return acc;
    }, {});

    return Object.entries(grouped).map(([category, total]) => ({
      name: category,
      value: total,
    }));
  }, []);

  const formatedData = useMemo(() => {
    return formatData(expenses);
  }, [formatData, expenses]);

  const totalAmount = useMemo(() => {
    return [...formatedData].reduce((acc, item) => acc + item.value, 0);
  }, [formatedData]);

  return { data: formatedData, totalAmount };
}