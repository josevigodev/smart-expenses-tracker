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
import { ExpenseChart } from './features/expenses/ExpenseChart';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openCharts, setOpenCharts] = useState(false);

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
      <header className='header'>
        <div className='width-padding-container'>
          <div className='options-container'>
            <Button
              className='button add'
              title='add expense'
              handleClick={() => setOpenForm(!openForm)}
            >
              <AddIcon />
              <span className='option-button-text'>Add Expense</span>
            </Button>
            <Button
              title='show filters'
              className='button'
              handleClick={() => setOpenFilter(true)}
            >
              <FilterIcon />
              <span className='option-button-text'>Show Filters</span>
            </Button>
            <Button
              handleClick={() => setOpenCharts(true)}
              title='show charts'
              className='button'
            >
              <ChartIcon />
              <span className='option-button-text'>Show Charts</span>
            </Button>
            <Button
              handleClick={handlePrintClick}
              title='print'
              className='button'
            >
              <PrinterIcon />
              <span className='option-button-text'>Print</span>
            </Button>
          </div>
        </div>
      </header>

      <ExpensesContextProvider>
        {openForm && (
          <ExpenseForm openForm={openForm} setOpenForm={setOpenForm} />
        )}
        <FilterContextProvider>
          <div className='provicional'>
            <ExpenseFilter
              openFilter={openFilter}
              setOpenFilter={setOpenFilter}
            />
            <ExpenseList setOpenForm={setOpenForm} />
            <ExpenseChart
              openCharts={openCharts}
              setOpenCharts={setOpenCharts}
            />
          </div>
        </FilterContextProvider>
      </ExpensesContextProvider>
    </>
  );
}

export default App;
