import { useCallback } from "react";

const useDebounceHandler = (handler) => {
  // => Debounce function for reduce network call
  const debounce = (fn, delay) => {
    let timerID;
    return (...val) => {
      if (timerID) {
        clearTimeout(timerID);
      }

      timerID = setTimeout(() => {
        fn.apply(this, val);
      }, delay);
    };
  };

  const request = debounce(handler, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceRequest = useCallback((val) => request(val), []);

  return debounceRequest;
};

export default useDebounceHandler;
