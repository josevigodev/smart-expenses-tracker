import { useContext, useId } from 'react';
import { Input } from '../../components/Input';
import { useExpenseData } from '../../hooks/useExpenseData';
import { FilterContext } from '../../context/FilterContext';
import { CloseIcon } from '../../components/Icons';
import { Button } from '../../components/Button';
import { useOpenModal } from '../../hooks/useOpenModal';

export function ExpenseFilter({ openFilter, setOpenFilter }) {
  const { handleChange } = useExpenseData();
  const { setFilter } = useContext(FilterContext);
  const { className } = useOpenModal({ state: openFilter });

  const minPriceId = useId();
  const categoryId = useId();
  const dateId = useId();

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleInputChange = ({ e, prop }) => {
    handleChange({ e, prop: 'amount' });
    setFilter((prevFilter) => ({
      ...prevFilter,
      [prop]: e.target.value,
    }));
  };

  return (
    <div className={`blur ${openFilter ? 'visible' : ''}`}>
      <section className={`expense-filter-section modal ${className}`}>
        <div className='expense-filter-header'>
          <h4>Filters</h4>
          <Button
            handleClick={handleCloseFilter}
            className='button close-filter'
          >
            <CloseIcon />
          </Button>
        </div>
        <nav className='expense-filter'>
          <div className='flex-column-container filter'>
            <label htmlFor={minPriceId}>Min price:</label>
            <Input
              id={minPriceId}
              className='input'
              handleChange={(e) => handleInputChange({ e, prop: 'minPrice' })}
              type='number'
            />
          </div>

          <div className='flex-column-container filter'>
            <label htmlFor={categoryId}>Category:</label>
            <Input
              id={categoryId}
              className='input'
              handleChange={(e) => handleInputChange({ e, prop: 'category' })}
              type='select'
            />
          </div>

          <div className='flex-column-container filter'>
            <label htmlFor={dateId}>Date:</label>
            <Input
              id={dateId}
              className='input'
              handleChange={(e) => handleInputChange({ e, prop: 'date' })}
              type='date'
            />
          </div>
        </nav>
      </section>
    </div>
  );
}
