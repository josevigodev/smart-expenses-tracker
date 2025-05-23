import { ExpensesContext } from '../../context/ExpensesContext';
import { ExpenseItem } from './ExpenseItem';
import { useFilterExpenses } from '../../hooks/useFilterExpenses';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { Button } from '../../components/Button';
import { AddIcon } from '../../components/Icons';

export function ExpenseList({ setOpenForm, openForm }) {
  const { expenses } = useFilterExpenses();
  const { width } = useWindowWidth();

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
              {width > 950 && (
                <Button
                  className={`button add ${
                    width > 540 && 'flex-row-container'
                  }`}
                  title='add expense'
                  handleClick={() => setOpenForm(true)}
                >
                  <AddIcon />
                  {width > 540 && <span>Add Expense</span>}
                </Button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
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
