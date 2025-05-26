import { useState } from "react";

export const emptyForm = {
  title: '',
  amount: 0.01,
  category: 'select',
  date: '',
};

export function useExpenseData(expense) {
  const [data, setData] = useState(expense ?? emptyForm);

  const handleChange = ({ e, prop }) => {
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  return { data, handleChange, setData };
}