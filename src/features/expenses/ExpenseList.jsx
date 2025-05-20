import { useContext } from 'react';
import { ExpensesContext } from '../../context/ExpensesContext';
import { ExpenseItem } from './ExpenseItem';
import { useFilterExpenses } from '../../hooks/useFilterExpenses';

export function ExpenseList({ setOpenForm, openForm }) {
  const { expenses } = useContext(ExpensesContext);
  const { filterExpenses } = useFilterExpenses();
  const filteredExpenses = filterExpenses(expenses);

  return (
    <section className='width-padding-container'>
      <table className='expenses-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              setOpenForm={setOpenForm}
              openForm={openForm}
              key={expense.id}
              expense={expense}
              {...expense}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
