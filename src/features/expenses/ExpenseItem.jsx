import { memo, useContext, useId, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import {
  CloseIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
} from '../../components/Icons';
import { ExpensesContext } from '../../context/ExpensesContext';
import { Input } from '../../components/Input';

export const ExpenseItem = memo(function ({
  title,
  amount,
  category,
  date,
  id,
  expense,
}) {
  const [data, setData] = useState(expense);
  const [isEditing, setIsEditing] = useState(false);
  const { deleteExpense, editExpense } = useContext(ExpensesContext);

  const inputTitleId = useId();
  const inputAmountId = useId();
  const inputCategoryId = useId();
  const inputDateId = useId();

  const editExpenseRef = useRef(null);

  const handleChange = ({ e, prop }) => {
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  const hanldeEditClick = () => {
    setIsEditing(true);
    editExpenseRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const handleSaveClick = () => {
    editExpense({ expenseData: data });
    setIsEditing(false);
  };

  const handleDiscardClick = () => {
    setIsEditing(false);
    setData(expense);
  };

  return (
    <tr ref={editExpenseRef}>
      {isEditing ? (
        <td colSpan={5}>
          <div className='edit-cell'>
            <div className='edit-inputs'>
              <div className='input-wrapper'>
                <label htmlFor={inputTitleId}>Title</label>
                <Input
                  id={inputTitleId}
                  className='input'
                  type='text'
                  handleChange={(e) => handleChange({ e, prop: 'title' })}
                  value={data.title}
                />
              </div>

              <div className='input-wrapper'>
                <label htmlFor={inputAmountId}>Amount</label>
                <Input
                  id={inputAmountId}
                  className='input'
                  type='number'
                  handleChange={(e) => handleChange({ e, prop: 'amount' })}
                  value={data.amount}
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor={inputCategoryId}>Category</label>
                <Input
                  id={inputCategoryId}
                  className='input'
                  type='select'
                  handleChange={(e) => handleChange({ e, prop: 'category' })}
                  value={data.category}
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor={inputDateId}>Date</label>
                <Input
                  id={inputDateId}
                  className='input'
                  type='date'
                  handleChange={(e) => handleChange({ e, prop: 'date' })}
                  value={data.date}
                />
              </div>
            </div>
            <div className='flex-row-container'>
              <Button
                title='save'
                className='button save'
                handleClick={handleSaveClick}
              >
                <SaveIcon />
                <span>Save</span>
              </Button>

              <Button
                title='discard'
                handleClick={handleDiscardClick}
                className='button discard'
              >
                <CloseIcon />
                <span>Discard</span>
              </Button>
            </div>
          </div>
        </td>
      ) : (
        <>
          <td className='cell'>
            <span>{title}</span>
          </td>
          <td className='cell'>
            <span>$ {amount}</span>
          </td>
          <td className='cell'>
            <span id='category' className={category}>
              {category}
            </span>
          </td>
          <td className='cell'>
            <span>{date}</span>
          </td>
          <td className='cell'>
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
          </td>
        </>
      )}
    </tr>
  );
});
