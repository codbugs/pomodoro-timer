import { useState } from 'react';
import { useNotification, useTaskDetail } from '../../hooks';

import { ChangeTimeScreen, PomodoroScreen } from '../screens';
import Spinner from '../Spinner';


export default function PomodoroManagerScreen({ taskId, onCancel }) {
    const POMODORO_SCREEN = 0;
    const CHANGE_TIME_SCREEN = 1;
  
    const [notificationState, notificationRequest, notificationSend] = useNotification();
    const [task, changeTime, increase] = useTaskDetail(taskId);
    const [state, setState] = useState(POMODORO_SCREEN);
  
    if(null === task) {
      return <Spinner />;
    }
  
    const onPomodoroEndHandler = () => {
      increase();
      notificationSend({
        title: 'You\'ve finished ' + task.title,
        body: 'Congratulations!!! You have finished the task and can now take a break before starting again.'
      });
    };
  
    return <>
      { state === POMODORO_SCREEN && <PomodoroScreen task={ task } onCancel={ onCancel } onPomodoroEnd={ () => onPomodoroEndHandler() } onChangeTime={ () => setState(CHANGE_TIME_SCREEN) } /> }
      { state === CHANGE_TIME_SCREEN && <ChangeTimeScreen task={ task } onCancel={ () => setState(POMODORO_SCREEN) } onSave={ newTime => { changeTime(newTime); setState(POMODORO_SCREEN); } }/> }
    </>;
  }