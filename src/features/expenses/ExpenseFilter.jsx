import { useContext } from 'react';
import { Input } from '../../components/Input';
import { useExpenseData } from '../../hooks/useExpenseData';
import { FilterContext } from '../../context/FilterContext';

export function ExpenseFilter() {
  const { handleChange } = useExpenseData();
  const { setFilter } = useContext(FilterContext);

  const handleInputChange = ({ e, prop }) => {
    handleChange({ e, prop: 'amount' });
    setFilter((prevFilter) => ({
      ...prevFilter,
      [prop]: e.target.value,
    }));
  };

  return (
    <nav>
      <Input
        handleChange={(e) => handleInputChange({ e, prop: 'minPrice' })}
        type='number'
      />
      <Input
        handleChange={(e) => handleInputChange({ e, prop: 'category' })}
        type='select'
      />
      <Input
        handleChange={(e) => handleInputChange({ e, prop: 'date' })}
        type='date'
      />
    </nav>
  );
}
