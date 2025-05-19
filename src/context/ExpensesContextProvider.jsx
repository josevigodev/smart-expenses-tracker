import { useState } from 'react';
import { ExpensesContext } from './ExpensesContext';

const initialData = {
  id: 0,
  title: 'Netflix movie',
  amount: 0.01,
  category: 'Housing',
  date: '10-23-2025',
};

let nextId = 1;

export function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState([initialData]);

  const addExpense = ({ expense }) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: nextId++ },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
}
