import { useContext } from 'react';
import { ExpensesContext } from '../../context/ExpensesContext';
import { ExpenseItem } from './ExpenseItem';

export function ExpenseList() {
  const { expenses } = useContext(ExpensesContext);
  return (
    <section className='width-padding-container'>
      <table className='expenses-table'>
        <thead>
          <tr>
            <th>Expense List</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
