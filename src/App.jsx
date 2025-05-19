import { useState } from 'react';
import { Button } from './components/Button';
import { ExpensesContextProvider } from './context/ExpensesContextProvider';
import { ExpenseForm } from './features/expenses/ExpenseForm';
import { ExpenseList } from './features/expenses/ExpenseList';
import './styles/globals.css';
import { AddIcon } from './components/Icons';

function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <ExpensesContextProvider>
      <h1>Smart Expenses Tracker</h1>
      <Button handleClick={() => setOpenForm(!openForm)}>
        <AddIcon />
      </Button>
      <ExpenseForm openForm={openForm} setOpenForm={setOpenForm} />
      <ExpenseList />
    </ExpensesContextProvider>
  );
}

export default App;
