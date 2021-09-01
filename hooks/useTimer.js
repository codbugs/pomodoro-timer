import { useEffect, useState } from 'react';


export default function useTimer(callback) {

    const DEFAULT_SECONDS = 5;
    const [intervalId, setIntervalId] = useState(null);
    const [time, setTime] = useState(DEFAULT_SECONDS);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      if(time === 0) {
        stop();
        callback();
      }
    }, [time]);
  
  
    const start = (seconds) => {
      setTime(seconds);
      setIsRunning(true);
      setIntervalId(setInterval(() => {
        setTime(previous => previous - 1);
      }, 1000));
    };
  
    const stop = () => {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    };
  
    return [time, isRunning, start, stop];
  }