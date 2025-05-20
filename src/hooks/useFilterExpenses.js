import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export function useFilterExpenses() {
  const {filter} = useContext(FilterContext);

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

  return {filterExpenses}
}