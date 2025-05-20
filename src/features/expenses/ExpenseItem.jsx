import { useContext, useState } from 'react';
import { Button } from '../../components/Button';
import {
  CloseIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
} from '../../components/Icons';
import { ExpensesContext } from '../../context/ExpensesContext';
import { Input } from '../../components/Input';
import { useExpenseData } from '../../hooks/useExpenseData';

export function ExpenseItem({ title, amount, category, date, id, expense }) {
  const { deleteExpense, editExpense } = useContext(ExpensesContext);
  const [isEditing, setIsEditing] = useState(false);
  const { data, handleChange } = useExpenseData(expense);

  const hanldeEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editExpense({ expenseData: data });
    setIsEditing(false);
  };

  const handleDiscardClick = () => {
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <Input
            className='edit-input'
            type='text'
            handleChange={(e) => handleChange({ e, prop: 'title' })}
            value={data.title}
          />
        ) : (
          <span>{title}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <Input
            className='edit-input'
            type='number'
            handleChange={(e) => handleChange({ e, prop: 'amount' })}
            value={data.amount}
          />
        ) : (
          <span>$ {amount}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <Input
            className='edit-input'
            type='select'
            handleChange={(e) => handleChange({ e, prop: 'category' })}
            value={data.category}
          />
        ) : (
          <span id='category' className={category}>
            {category}
          </span>
        )}
      </td>
      <td>
        {isEditing ? (
          <Input
            className='edit-input width-110'
            type='date'
            handleChange={(e) => handleChange({ e, prop: 'date' })}
            value={data.date}
          />
        ) : (
          <span>{date}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <div className='flex-row-container'>
            <Button
              title='save'
              className='button save'
              handleClick={handleSaveClick}
            >
              <SaveIcon />
            </Button>

            <Button
              title='discard'
              handleClick={handleDiscardClick}
              className='button delete'
            >
              <CloseIcon />
            </Button>
          </div>
        ) : (
          <div className='flex-row-container'>
            <Button
              title='edit'
              handleClick={hanldeEditClick}
              className='button edit'
            >
              <EditIcon />
            </Button>

            <Button
              title='delete'
              handleClick={() => deleteExpense(id)}
              className='button delete'
            >
              <DeleteIcon />
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
}
