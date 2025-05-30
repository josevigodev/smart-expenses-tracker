import { useState, useEffect } from 'react';
import { getLocalStorage, updateLocalStorage } from '../utils/localStorage';

const initialTheme = getLocalStorage('theme') || 'light';

export function ToggleTheme() {
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    document.body.className = theme === 'light' ? '' : 'dark';
  }, [theme]);

  const handleChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    updateLocalStorage('theme', newTheme);
  };

  return (
    <select
      aria-label='Theme selector'
      className='theme-selector'
      value={theme}
      onChange={handleChange}
      name=''
      id=''
    >
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
    </select>
  );
}
