import { useReducer } from 'react';
import { ExpensesContext } from './ExpensesContext';
import { expensesReducer } from '../reducers/expenseReducer';

const initialData = {
  id: 0,
  title: 'Netflix movie',
  amount: 0.01,
  category: 'Housing',
  date: '2025-05-21',
};

export function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, [initialData]);

  const addExpense = ({ expenseData }) => {
    dispatch({
      type: 'added_expense',
      expenseData: expenseData,
    });
  };

  const editExpense = ({ expenseData }) => {
    dispatch({
      type: 'edited_expense',
      expenseData: expenseData,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: 'deleted_expense',
      id: id,
    });
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, editExpense, deleteExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}
