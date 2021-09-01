import { useState } from 'react';
import { useTasks } from '../../hooks';

import { Center } from '../layout';
import { ConfirmationScreen, NewTaskScreen } from '../screens';
import Spinner from '../Spinner';
import Text from '../Text';


export default function NewTaskScreenManager({ onCancel }) {
    const [tasks, create] = useTasks();
    const [taskData, setTaskData] = useState(null);
    
    if(null === tasks) {
      return <Spinner />;
    }
  
    if(null !== taskData) {
      return <ConfirmationScreen title="Confirm creation" onCancel={ () => setTaskData(null) } onConfirm={ () => { create(taskData.title, taskData.time); setTaskData(null); onCancel(); } }>
        <Center><Text>You are about to create a new task with title <div className="emphasis">{ taskData.title }</div> and a pomodoro time of <div className="emphasis">{ Math.floor(parseInt(taskData.time) / 60) }</div> minutes.</Text><Text>Confirm if data is correct.</Text></Center>
      </ConfirmationScreen>;
    }
  
    return <NewTaskScreen tasks={ tasks } onCancel={ onCancel } onSave={ data => setTaskData(data) } />
  }