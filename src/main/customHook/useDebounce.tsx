import { useEffect } from 'react';

const useDebounce = (callback: any, dependency: any) => {
  useEffect(() => {
    const tmp = setTimeout(() => {
      callback();
    }, 500);
    return () => {
      clearTimeout(tmp);
    };
  }, [dependency]);
};
export default useDebounce;
