import { useContext, useId, useState } from 'react';
import { Button } from '../../components/Button';
import { ExpensesContext } from '../../context/ExpensesContext';
import { CloseIcon } from '../../components/Icons';
import { Input } from '../../components/Input';
import { useOpenModal } from '../../hooks/useOpenModal';

const emptyForm = {
  title: '',
  amount: 0.01,
  category: 'select',
  date: '',
};

function ExpenseForm({ active, setActive }) {
  const [data, setData] = useState(emptyForm);
  const [error, setError] = useState('');

  const { className } = useOpenModal({ state: active === 'form' });
  const { addExpense } = useContext(ExpensesContext);

  const titleId = useId();
  const amountId = useId();
  const categoryId = useId();
  const dateId = useId();

  const handleChange = ({ e, prop }) => {
    if (prop === 'category' && e.target.value === 'select') {
      setError('Select a valid category');
    } else if (prop === 'category' && e.target.value !== 'select') {
      setError('');
    }
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.category.value === 'select') {
      setError('Select a valid category');
      return;
    }

    addExpense({ expenseData: data });
    setData(emptyForm);
    setActive('');
  };

  return (
    <div className={`blur ${active === 'form' ? 'visible' : ''}`}>
      <form
        onSubmit={handleSubmit}
        className={`expense-form modal ${className}`}
      >
        <div className='close-button-container'>
          <Button
            className='button close'
            type='button'
            handleClick={() => {
              setActive('');
              setData(emptyForm);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
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
            form
            name='category'
            type='select'
            className='input'
            handleChange={(e) => handleChange({ e, prop: 'category' })}
            value={data.category}
            id={categoryId}
          />
          <small className='category-error'>{error}</small>
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

export default ExpenseForm;
