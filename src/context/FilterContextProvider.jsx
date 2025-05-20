import { useState } from 'react';
import { FilterContext } from './FilterContext';

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState({
    minPrice: 0.01,
    category: 'select',
    date: '',
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
