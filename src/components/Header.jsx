import { memo } from 'react';
import { Button } from './common/Button';
import { AddIcon, ChartIcon, FilterIcon, PrinterIcon } from './common/Icons';
import { ToggleTheme } from './ToggleTheme';

export const Header = memo(function ({ setActive }) {
  const handlePrintClick = () => {
    window.print();
  };

  return (
    <header className='header'>
      <div className='max-width'>
        <h1>Expenses Tracker</h1>
        <div className='options-container'>
          <Button
            className='button add'
            title='add expense'
            handleClick={() => setActive('form')}
          >
            <AddIcon />
            <span className='option-button-text'>Add Expense</span>
          </Button>
          <Button
            title='show filters'
            className='button'
            handleClick={() => setActive('filter')}
          >
            <FilterIcon />
            <span className='option-button-text'>Show Filters</span>
          </Button>
          <Button
            handleClick={() => setActive('charts')}
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
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
});
