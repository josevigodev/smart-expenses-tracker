import { useContext } from 'react';
import { Button } from '../../components/Button';
import { DeleteIcon, EditIcon } from '../../components/Icons';
import { ExpensesContext } from '../../context/ExpensesContext';

export function ExpenseItem({ title, amount, category, date, id }) {
  const { deleteExpense } = useContext(ExpensesContext);

  return (
    <tr>
      <td>{title}</td>
      <td>$ {amount}</td>
      <td>
        <span className={category}>{category}</span>
      </td>
      <td>{date}</td>
      <td>
        <div className='flex-row-container'>
          <Button className='button edit'>
            <EditIcon />
          </Button>
          <Button
            handleClick={() => deleteExpense(id)}
            className='button delete'
          >
            <DeleteIcon />
          </Button>
        </div>
      </td>
    </tr>
  );
}
