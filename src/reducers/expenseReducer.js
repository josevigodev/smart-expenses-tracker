let nextId = 1;

export function expensesReducer(expenses, action) {
  const { type, expenseData, id } = action;
  switch (type) {
    case 'added_expense': {
      return [...expenses, { id: nextId++, ...expenseData }];
    }

    case 'edited_expense': {
      return expenses.map((expense) => {
        if (expense.id === expenseData.id) {
          return expenseData;
        } else {
          return expense;
        }
      });
    }

    case 'deleted_expense': {
      return expenses.filter((expense) => expense.id !== id);
    }

    default: {
      throw new Error(`Action type ${type} not valid`);
    }
  }
}