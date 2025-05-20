import { useReducer } from 'react';
import { ExpensesContext } from './ExpensesContext';
import { expensesReducer } from '../reducers/expenseReducer';
import { getLocalStorage } from '../utils/localStorage';

const initialExpenses = getLocalStorage('expenses') || [];

export function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, initialExpenses);

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
