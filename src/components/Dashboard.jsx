import { useMediaQuery } from '../hooks/useMediaQuery';
import { FilterContextProvider } from '../context/FilterContextProvider';
import ExpenseFilter from '../features/expenses/ExpenseFilter';
import { ExpenseList } from '../features/expenses/ExpenseList';
import ExpenseChart from '../features/expenses/ExpenseChart';

export function Dashboard({ active, setActive }) {
  const showFilter = useMediaQuery('(min-width: 950px)');
  // const showCharts = useMediaQuery('(min-width: 1280px)');

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
