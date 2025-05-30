import { ExpenseFilter } from './ExpenseFilter';
import { ExpenseList } from './ExpenseList';
import { ExpenseChart } from './ExpenseChart';
import { FilterContextProvider } from '../context/FilterContextProvider';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function Dashboard({ active, setActive }) {
  const showFilter = useMediaQuery('(min-width: 950px)');

  return (
    <FilterContextProvider>
      <main className='grid-dashboard max-width'>
        {active === 'filter' || showFilter ? (
          <ExpenseFilter active={active} setActive={setActive} />
        ) : null}
        <ExpenseList setActive={setActive} />
        <ExpenseChart active={active} setActive={setActive} />
      </main>
    </FilterContextProvider>
  );
}
