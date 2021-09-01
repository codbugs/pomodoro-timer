import { useEffect, useState } from 'react';

import { Button, PrimaryButton } from '../buttons';
import { Actions, Center, Content, Screen } from '../layout';
import List from '../List';
import ListItemTemplate from '../LIstItemTemplate';
import Text from '../Text';

export default function TaskListScreen({ tasks, onNewTask, onRun, onRemove }) {
    const [orderedTasks, setOrderedTasks] = useState(tasks);
  
    useEffect(() => {
      tasks.sort(function(a,b) {
        return a.pomodoros.length > b.pomodoros.length ? -1 : 1;
      });
      setOrderedTasks(tasks);
    }, [tasks]);
  
    return <Screen title="Task Manager">
      <Content>
          <Center>
            <Text>Welcome to <div className="emphasis">Task Manager</div>, an application with which you can manage your time based on the pomodoros you have run. The application saves all the information in your browser without collecting any type of data in server or cloud.</Text>
          </Center>
          <List source={ orderedTasks }>
            <ListItemTemplate onRun={ item => onRun(item.id) } onRemove={ item => onRemove(item) } />
          </List>
      </Content>
      <Actions>
        { tasks.length === 0 && <Center><Text>You dont have any tasks in your collection yet. Click on the <div className="emphasis">New task</div> button to create the first one.</Text></Center> }
        { tasks.length === 0 && <PrimaryButton text="New task" onAction={ onNewTask } /> }
        { tasks.length > 0 && <Button text="New task" onAction={ onNewTask } /> }
      </Actions>
    </Screen>;
  }