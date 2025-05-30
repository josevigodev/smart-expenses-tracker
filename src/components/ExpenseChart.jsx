import { Cell, Legend, Pie, PieChart } from 'recharts';
import { useOpenModal } from '../hooks/useOpenModal';
import { Button } from './common/Button';
import { CloseIcon } from './common/Icons';
import { useFilterExpenses } from '../hooks/useFilterExpenses';
import { useData } from '../hooks/useData';

const categoryColors = {
  Housing: '#48e',
  Utilities: '#4f0',
  Transportation: '#488',
  Groceries: '#4ee',
  Health: '#84e',
  Insurance: '#8e7',
  Entertainment: '#bc9',
  Education: '#844',
  Shopping: '#e48',
  Travel: '#e84',
  Gifts: '#e88',
  Saving: '#e44',
  Investments: '#fe8',
  Miscellaneous: '#666',
};

export function ExpenseChart({ active, setActive }) {
  const { expenses } = useFilterExpenses();
  const { className } = useOpenModal({ state: active === 'charts' });
  const { data, totalAmount } = useData(expenses);

  return (
    <div className={`blur ${active === 'charts' ? 'visible' : ''}`}>
      <section className={`expense-charts modal ${className}`}>
        <div className='expense-filter-header'>
          <h4>Chart</h4>
          <Button
            className='button close'
            type='button'
            handleClick={() => {
              setActive('');
            }}
          >
            <CloseIcon />
          </Button>
        </div>
        {data.length === 0 ? (
          <p>Add expenses to see the chart</p>
        ) : (
          <span className='total-amount'>Total: $ {totalAmount}</span>
        )}
        <PieChart width={280} height={420}>
          <Pie
            data={data}
            dataKey='value'
            nameKey='name'
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={categoryColors[entry.name] || '#333'}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </section>
    </div>
  );
}
