import { useEffect, useRef } from 'react';

let timeOutReference: NodeJS.Timeout;

const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>(callback);
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const time = setInterval(tick, delay);
    timeOutReference = time;

    return () => clearInterval(time);
  }, [delay]);
}

export const clearIntervalOutside = () => {
  clearInterval(timeOutReference);
}

export default useInterval;