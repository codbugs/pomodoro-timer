import { useState } from 'react';
import { useTasks } from '../../hooks';

import { Center } from '../layout';
import { ConfirmationScreen, TaskListScreen } from '../screens';
import Spinner from '../Spinner';
import Text from '../Text';


export default function TaskListManagerScreen({ onNewTask, onRun }) {
    const [tasks, create, update, remove] = useTasks();
    const [taskId, setTaskId] = useState(null);
  
    if(null === tasks) {
      return <Spinner />;
    }
  
    if(null !== taskId) {
      const task = tasks.filter(t => t.id === taskId)[0];
      const title = `Removing task`;
      return <ConfirmationScreen title={ title } onCancel={ () => setTaskId(null) } onConfirm={ () => { remove(taskId); setTaskId(null); } }>
        <Center>
          <Text>Are you sure to permanently delete the <div className="emphasis">{ task.title }</div> task?</Text>
          <Text>This action has no turning back.</Text>
        </Center>
      </ConfirmationScreen>;
    }
  
    return <TaskListScreen tasks={ tasks } onNewTask={ onNewTask } onRun={ onRun } onRemove={ task => setTaskId(task.id) } />;
  }