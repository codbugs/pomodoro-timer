import { useEffect, useState } from "react";
import useTasks from './useTasks';


export default function useTaskDetail(taskId) {

    const [tasks, create, update] = useTasks();
    const [task, setTask] = useState(null);
  
    useEffect(() => {
      const filteredTasks = tasks.filter(t => t.id === taskId);
      if(filteredTasks.length > 0) {
        setTask(filteredTasks[0]);
      }
    }, [tasks]);
  
    const changeTime = newTime => {
      const filteredTasks = tasks.filter(t => t.id === taskId);
      if(filteredTasks.length > 0) {
        filteredTasks[0].time = parseInt(newTime);
        update(filteredTasks[0]);
      }
    };
  
    const increasePomodoro = () => {
      const filteredTasks = tasks.filter(t => t.id === taskId);
      if(filteredTasks.length > 0) {
        filteredTasks[0].pomodoros.push({
          time: filteredTasks[0].time,
          date: new Date()
        });
  
        update(filteredTasks[0]);
      }
    };
  
    return [task, changeTime, increasePomodoro];
  }