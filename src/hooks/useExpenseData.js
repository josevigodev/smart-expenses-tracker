import { useState } from "react";

const emptyForm = {
  title: '',
  amount: 0.01,
  category: 'Housing',
  date: '',
};

export function useExpenseData(expense) {
  const initialData = expense ?? emptyForm;
  const [data, setData] = useState(initialData);

  const handleChange = ({ e, prop }) => {
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  return { data, handleChange, setData, initialData };
}