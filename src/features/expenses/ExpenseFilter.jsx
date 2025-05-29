import { useContext, useId } from 'react';
import { Input } from '../../components/Input';
import { FilterContext } from '../../context/FilterContext';
import { CloseIcon } from '../../components/Icons';
import { Button } from '../../components/Button';
import { useOpenModal } from '../../hooks/useOpenModal';

function ExpenseFilter({ active, setActive }) {
  const { setFilter } = useContext(FilterContext);
  const { className } = useOpenModal({ state: active === 'filter' });

  const minPriceId = useId();
  const categoryId = useId();
  const dateId = useId();

  const handleCloseFilter = () => {
    setActive('');
  };

  const handleInputChange = ({ e, prop }) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [prop]: e.target.value,
    }));
  };

  return (
    <div className={`blur ${active === 'filter' ? 'visible' : ''}`}>
      <aside className={`expense-filter-section modal ${className}`}>
        <div className='expense-filter-header'>
          <h4>Filters</h4>
          <Button handleClick={handleCloseFilter} className='button close'>
            <CloseIcon />
          </Button>
        </div>
        <form className='expense-filter'>
          <div className='filter'>
            <label htmlFor={minPriceId}>Min price ($):</label>
            <Input
              id={minPriceId}
              className='input'
              handleChange={(e) => handleInputChange({ e, prop: 'minPrice' })}
              type='number'
            />
          </div>

          <div className='filter'>
            <label htmlFor={categoryId}>Category:</label>
            <Input
              filter
              id={categoryId}
              className='input'
              handleChange={(e) => handleInputChange({ e, prop: 'category' })}
              type='select'
            />
          </div>

          <div className='filter'>
            <label htmlFor={dateId}>Date:</label>
            <Input
              id={dateId}
              className='input'
              handleChange={(e) => handleInputChange({ e, prop: 'date' })}
              type='date'
            />
          </div>
        </form>
      </aside>
    </div>
  );
}

export default ExpenseFilter;
