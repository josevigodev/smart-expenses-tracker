import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";

let nextId = getLocalStorage('nextId') || 1;

export function expensesReducer(expenses, action) {
  const { type, expenseData, id } = action;
  switch (type) {
    case 'added_expense': {
      const newExpenses = [...expenses, { id: nextId++, ...expenseData }];
      updateLocalStorage('expenses', newExpenses);
      updateLocalStorage('nextId', nextId++)
      return newExpenses;
    }

    case 'edited_expense': {
      const newExpenses = expenses.map((expense) => {
        if (expense.id === expenseData.id) {
          return expenseData;
        } else {
          return expense;
        }
      });
      updateLocalStorage('expenses', newExpenses);
      return newExpenses;
    }

    case 'deleted_expense': {
      const newExpenses = expenses.filter((expense) => expense.id !== id);
      updateLocalStorage('expenses', newExpenses);
      return newExpenses;
    }

    default: {
      throw new Error(`Action type ${type} not valid`);
    }
  }
}