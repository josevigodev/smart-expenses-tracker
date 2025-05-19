import { useContext, useId, useState } from 'react';
import { Button } from '../../components/Button';
import { ExpensesContext } from '../../context/ExpensesContext';
import { CloseIcon } from '../../components/Icons';

const initialData = {
  title: '',
  amount: 0.01,
  category: 'Housing',
  date: '',
};

export function ExpenseForm({ openForm, setOpenForm }) {
  const titleId = useId();
  const amountId = useId();
  const categoryId = useId();
  const dateId = useId();
  const { addExpense } = useContext(ExpensesContext);
  const [data, setData] = useState(initialData);

  const handleChange = ({ e, prop }) => {
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ expense: data });
    setData(initialData);
    setOpenForm(!openForm);
  };

  return (
    <div className={`blur ${openForm && 'visible'}`}>
      <form
        onSubmit={handleSubmit}
        className={`expense-form ${openForm && 'visible'}`}
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
          <input
            onChange={(e) => handleChange({ e, prop: 'title' })}
            value={data.title}
            required
            className='input'
            id={titleId}
            type='text'
          />
        </div>

        <div className='flex-column-container'>
          <label htmlFor={amountId}>Amount ($)</label>
          <input
            onChange={(e) => handleChange({ e, prop: 'amount' })}
            value={data.amount}
            required
            className='input'
            id={amountId}
            type='number'
            step='0.01'
            min={0.01}
          />
        </div>

        <div className='flex-column-container'>
          <label htmlFor={categoryId}>Category</label>
          <select
            onChange={(e) => handleChange({ e, prop: 'category' })}
            value={data.category}
            className='input'
            id={categoryId}
          >
            <option value='Housing'>Housing</option>
            <option value='Utilities'>Utilities</option>
            <option value='Transportation'>Transportation</option>
            <option value='Groceries'>Groceries</option>
            <option value='Health'>Health</option>
            <option value='Insurance'>Insurance</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Education'>Education</option>
            <option value='Shopping'>Shopping</option>
            <option value='Travel'>Travel</option>
            <option value='Gifts'>Gifts</option>
            <option value='Saving'>Saving</option>
            <option value='Investments'>Investments</option>
            <option value='Miscellaneous'>Miscellaneous</option>
          </select>
        </div>

        <div className='flex-column-container'>
          <label htmlFor={dateId}>Date</label>
          <input
            onChange={(e) => handleChange({ e, prop: 'date' })}
            value={data.date}
            required
            className='input'
            id={dateId}
            type='date'
          />
        </div>
        <Button className='button add' type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
}
