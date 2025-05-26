import { useCallback, useContext, useMemo } from "react";
import { FilterContext } from "../context/FilterContext";
import { ExpensesContext } from "../context/ExpensesContext";

export function useFilterExpenses() {
  const {filter} = useContext(FilterContext);
  const {expenses} = useContext(ExpensesContext);
  console.log('renderizo')

  
  const filterExpenses = useCallback((expenses) => {
    return expenses.filter(expense => {
      return (
        Number(expense.amount) >= filter.minPrice && (
          filter.category === 'select' || expense.category === filter.category
        ) && (
          filter.date === '' || expense.date === filter.date
        )
      )
    })
  }, [filter])
  
  const filteredExpenses = useMemo(() => {
    return filterExpenses(expenses);
  }, [expenses, filterExpenses])

  return {expenses: filteredExpenses}
}