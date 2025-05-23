import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { ExpensesContext } from "../context/ExpensesContext";

export function useFilterExpenses() {
  const {filter} = useContext(FilterContext);
  const {expenses} = useContext(ExpensesContext);

  const filterExpenses = (expenses) => {
    return expenses.filter(expense => {
      return (
        Number(expense.amount) >= filter.minPrice && (
          filter.category === 'select' || expense.category === filter.category
        ) && (
          filter.date === '' || expense.date === filter.date
        )
      )
    })
  }

  const filteredExpenses = filterExpenses(expenses);

  return {expenses: filteredExpenses}
}