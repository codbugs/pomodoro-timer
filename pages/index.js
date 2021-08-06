import { useEffect, useState } from 'react';
import useRequestNotificationPermission from '../hooks/useRequestNotificationPermission';
import useTimer from '../hooks/useTimer';

import Actions from '../components/Actions';
import Clock from '../components/Clock';
import Section from '../components/Section';

import NotificationCreator from '../services/NotificationCreator';
import NotificationService from '../services/NotificationService';


export default function Home() {

  const INIT_MODE = 0;
  const RUNNNING_MODE = 1;

  const POMODORO_INITIAL_TIME = 5;

  let notification = new NotificationCreator().create();
  let notificationService = new NotificationService();
  let [mode, setMode] = useState(INIT_MODE);
  let [time, setTime] = useState(POMODORO_INITIAL_TIME);
  let [intervalId, setIntervalId] = useState(null);

  const startTimer = () => setMode(RUNNNING_MODE);
  const stopTimer = () => setMode(INIT_MODE);

  useRequestNotificationPermission();

  useEffect(() => {
    
    if(mode === INIT_MODE) {
      if(null !== intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }

    if(mode === RUNNNING_MODE) {
      setTime(POMODORO_INITIAL_TIME);
      setIntervalId(setInterval(function() {
        setTime(prev => prev - 1);
      }, 1000));
    }

  }, [mode]);


  useEffect(() => {

    if(time === 0) {
      setMode(INIT_MODE);
      notificationService.send(notification);
    }

  }, [time]);


  return <Section>
      <Clock text={ time } isRunning={ mode === RUNNNING_MODE } />
      <Actions isRunning={ mode === RUNNNING_MODE } onStart={ () => startTimer() } onStop={ () => stopTimer() }/>
    </Section>;
}