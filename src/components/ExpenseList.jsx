import { ExpenseItem } from './ExpenseItem';
import { useFilterExpenses } from '../hooks/useFilterExpenses';
import { Button } from './common/Button';
import { AddIcon } from './common/Icons';
import { memo } from 'react';

export const ExpenseList = memo(function ({ setActive }) {
  const { expenses } = useFilterExpenses();

  return (
    <section className='width-padding-container'>
      <table className='expenses-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>
              <Button
                className='button add'
                title='add expense'
                handleClick={() => setActive('form')}
              >
                <AddIcon />
                <span>Add Expense</span>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} {...expense} />
          ))}
        </tbody>
      </table>
    </section>
  );
});
