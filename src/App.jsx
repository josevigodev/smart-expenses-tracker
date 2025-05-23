import { useState } from 'react';
import { Button } from './components/Button';
import { ExpensesContextProvider } from './context/ExpensesContextProvider';
import { FilterContextProvider } from './context/FilterContextProvider';
import { ExpenseForm } from './features/expenses/ExpenseForm';
import { ExpenseList } from './features/expenses/ExpenseList';
import './styles/globals.css';
import {
  AddIcon,
  ChartIcon,
  FilterIcon,
  PrinterIcon,
} from './components/Icons';
import { ExpenseFilter } from './features/expenses/ExpenseFilter';
import { useWindowWidth } from './hooks/useWindowWidth';
import { ExpenseChart } from './features/expenses/ExpenseChart';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openCharts, setOpenCharts] = useState(false);
  const { width } = useWindowWidth();

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <ExpensesContextProvider>
      <header className='header'>
        <div className='width-padding-container'>
          <div className='options-container'>
            {width < 950 && (
              <Button
                className={`button add ${width > 540 && 'flex-row-container'}`}
                title='add expense'
                handleClick={() => setOpenForm(!openForm)}
              >
                <AddIcon />
                {width > 540 && <span>Add Expense</span>}
              </Button>
            )}
            {width < 950 && (
              <Button
                title='show filters'
                className={`button ${width > 540 && 'flex-row-container'}`}
                handleClick={() => setOpenFilter(true)}
              >
                <FilterIcon />
                {width > 540 && <span>Show Filters</span>}
              </Button>
            )}
            {width < 1280 && (
              <Button
                handleClick={() => setOpenCharts(true)}
                title='show charts'
                className={`button ${width > 540 && 'flex-row-container'}`}
              >
                <ChartIcon />
                {width > 540 && <span>Show Charts</span>}
              </Button>
            )}
            <Button
              handleClick={handlePrintClick}
              title='print'
              className={`button ${width > 540 && 'flex-row-container'}`}
            >
              <PrinterIcon />
              {width > 540 && <span>Print</span>}
            </Button>
          </div>
        </div>
      </header>
      <ExpenseForm openForm={openForm} setOpenForm={setOpenForm} />
      <FilterContextProvider>
        <div className='provicional'>
          <ExpenseFilter
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
          />
          <ExpenseList setOpenForm={setOpenForm} />
          <ExpenseChart openCharts={openCharts} setOpenCharts={setOpenCharts} />
        </div>
      </FilterContextProvider>
    </ExpensesContextProvider>
  );
}

export default App;
