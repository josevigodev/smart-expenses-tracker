import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useOpenModal } from '../../hooks/useOpenModal';
import { Button } from '../../components/Button';
import { CloseIcon } from '../../components/Icons';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useFilterExpenses } from '../../hooks/useFilterExpenses';

const categoryColors = {
  Housing: '#48e',
  Utilities: '#4e8',
  Transportation: '#488',
  Groceries: '#4ee',
  Health: '#84e',
  Insurance: '#8e4',
  Entertainment: '#8ee',
  Education: '#844',
  Shopping: '#e48',
  Travel: '#e84',
  Gifts: '#e88',
  Saving: '#e44',
  Investments: '#a3e',
  Miscellaneous: '#666',
};

export function ExpenseChart({ openCharts, setOpenCharts }) {
  const { expenses } = useFilterExpenses();
  const { className } = useOpenModal({ state: openCharts });
  const { width } = useWindowWidth();

  const formatData = (expenses) => {
    const categories = expenses.map((expense) => {
      return {
        category: expense.category,
        amount: Number(expense.amount),
      };
    });

    const grouped = categories.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }

      acc[item.category] += item.amount;
      return acc;
    }, {});

    return Object.entries(grouped).map(([category, total]) => ({
      name: category,
      value: total,
    }));
  };

  const data = formatData(expenses);

  return (
    <div className={`${width < 1280 && 'blur'} ${openCharts && 'visible'}`}>
      <section className={`expense-charts modal ${className}`}>
        <div className='expense-filter-header'>
          <h4>Charts</h4>
          {width < 1280 && (
            <Button
              className='button close-filter'
              type='button'
              handleClick={() => {
                setOpenCharts(!openCharts);
              }}
            >
              <CloseIcon />
            </Button>
          )}
        </div>
        {data.length === 0 && <p>Add expenses to see the chart</p>}
        <PieChart width={280} height={375}>
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
          <Tooltip />
          <Legend />
        </PieChart>
      </section>
    </div>
  );
}
