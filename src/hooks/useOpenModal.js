import { useEffect, useState } from "react";
import { useWindowWidth } from "./useWindowWidth";

export function useOpenModal({ state }) {
  const [className, setClassName] = useState('');
  const {width} = useWindowWidth();

  useEffect(() => {
    const id = setTimeout(() => {
      setClassName(`${state && 'opened'}`);
    }, 100);

    document.body.style.overflow = state && width < 950 ? 'hidden' : 'auto';

    return () => {
      clearTimeout(id);
    };
  }, [state, width]);

  return { className };
}