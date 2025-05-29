import { useEffect, useState } from "react";

export function useOpenModal({ state }) {
  const [className, setClassName] = useState('');

  useEffect(() => {
    const id = setTimeout(() => {
      setClassName(`${state ? 'opened' : ''}`);
    }, 100);

    
    return () => {
      clearTimeout(id);
    };
  }, [state]);

  return { className };
}