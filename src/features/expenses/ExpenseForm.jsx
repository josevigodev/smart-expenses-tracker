import { useContext, useId } from 'react';
import { Button } from '../../components/Button';
import { ExpensesContext } from '../../context/ExpensesContext';
import { CloseIcon } from '../../components/Icons';
import { Input } from '../../components/Input';
import { useExpenseData } from '../../hooks/useExpenseData';
import { useOpenModal } from '../../hooks/useOpenModal';

export function ExpenseForm({ openForm, setOpenForm }) {
  const titleId = useId();
  const amountId = useId();
  const categoryId = useId();
  const dateId = useId();
  const { className } = useOpenModal({ state: openForm });

  const { addExpense } = useContext(ExpensesContext);
  const { data, handleChange, setData, initialData } = useExpenseData();

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ expenseData: data });
    setData(initialData);
    setOpenForm(!openForm);
  };

  return (
    <div className={`blur ${openForm && 'visible'}`}>
      <form
        onSubmit={handleSubmit}
        className={`expense-form modal ${className}`}
      >
        <Button
          className='button close'
          type='button'
          handleClick={() => {
            setOpenForm(!openForm);
            setData(initialData);
          }}
        >
          <CloseIcon />
        </Button>
        <div className='flex-column-container'>
          <label htmlFor={titleId}>Title</label>
          <Input
            type='text'
            className='input'
            handleChange={(e) => handleChange({ e, prop: 'title' })}
            value={data.title}
            id={titleId}
            required
          />
        </div>

        <div className='flex-column-container'>
          <label htmlFor={amountId}>Amount ($)</label>
          <Input
            type='number'
            className='input'
            handleChange={(e) => handleChange({ e, prop: 'amount' })}
            value={data.amount}
            id={amountId}
            required
          />
        </div>

        <div className='flex-column-container'>
          <label htmlFor={categoryId}>Category</label>
          <Input
            type='select'
            className='input'
            handleChange={(e) => handleChange({ e, prop: 'category' })}
            value={data.category}
            id={categoryId}
          />
        </div>

        <div className='flex-column-container'>
          <label htmlFor={dateId}>Date</label>
          <Input
            type='date'
            className='input'
            handleChange={(e) => handleChange({ e, prop: 'date' })}
            value={data.date}
            id={dateId}
            required
          />
        </div>
        <Button className='button add' type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
}
