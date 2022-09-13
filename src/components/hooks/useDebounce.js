import { useEffect, useState } from "react";

export default function useDebounce(innitial = "", delay = '1000') {
    const [debounce, setDebounce] = useState(innitial);
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounce(innitial);
      }, delay);
      return () => {
        clearTimeout(timer);
      }
    },[delay, innitial]);
  return debounce
}
