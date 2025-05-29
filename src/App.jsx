import './styles/globals.css';
import { lazy, Suspense, useState } from 'react';
import { ExpensesContextProvider } from './context/ExpensesContextProvider';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

const ExpenseForm = lazy(() =>
  import('./features/expenses/ExpenseForm').catch((error) => {
    console.log('Error loading component: ', error);

    return {
      default: () => (
        <div>Failed to load component. Check the conection and try again.</div>
      ),
    };
  })
);

function App() {
  const [active, setActive] = useState('');

  return (
    <div className='layout-container'>
      <Header setActive={setActive} />
      <ExpensesContextProvider>
        <Suspense fallback={<div className='loader'></div>}>
          {active === 'form' && (
            <ExpenseForm active={active} setActive={setActive} />
          )}
        </Suspense>
        <Dashboard active={active} setActive={setActive} />
      </ExpensesContextProvider>
      <Footer />
    </div>
  );
}

export default App;
