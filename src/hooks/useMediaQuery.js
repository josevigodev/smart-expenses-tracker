import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}