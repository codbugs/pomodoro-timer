import { useEffect, useState } from 'react';
import { useNotification } from '../hooks';

import { Main } from '../components/layout';
import { NewTaskScreenManager, TaskListManagerScreen, PomodoroManagerScreen } from '../components/screens';
import Footer from '../components/Footer';


export default function Home() {

  // Three screens: [Tasks List, Task Detail, New Task]
  const NEW_TASK_STATE = 0;
  const TASK_LIST_STATE = 1;
  const POMODORO_STATE = 2;

  const [state, setState] = useState(TASK_LIST_STATE);
  const [taskId, setTaskId] = useState(null);

  const [notificationState, notificationRequestPermission] = useNotification();

  useEffect(() => {
    notificationRequestPermission();
  }, []);

  return <>
    <Main>
      { state === NEW_TASK_STATE && <NewTaskScreenManager onCancel={ () => setState(TASK_LIST_STATE) } /> }
      { state === TASK_LIST_STATE && <TaskListManagerScreen onNewTask={ () => setState(NEW_TASK_STATE) } onRun= { id => {
          setState(POMODORO_STATE);
          setTaskId(id);
        }
      } /> }
      { state === POMODORO_STATE && <PomodoroManagerScreen taskId={ taskId } onCancel={ () => {
          setState(TASK_LIST_STATE);
          setTaskId(null);
        }} />
      }
    </Main>
    <Footer />
    </>;
}