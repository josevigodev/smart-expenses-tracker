import { ExpenseItem } from './ExpenseItem';
import { useFilterExpenses } from '../../hooks/useFilterExpenses';
import { Button } from '../../components/Button';
import { AddIcon } from '../../components/Icons';

export function ExpenseList({ setOpenForm }) {
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
                handleClick={() => setOpenForm(true)}
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
}
