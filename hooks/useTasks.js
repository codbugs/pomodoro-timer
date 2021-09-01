import usePersistedData from './usePersistedData';

export default function useTasks() {

    const KEY = 'tasks';
    const [tasks, setTasks] = usePersistedData(KEY, []);
  
    const create = (title, time) => {
      const taskWithGreaterId = tasks.reduce( 
          (acc, current) => acc.id < current.id ? current : acc, 
          { id: 0 }
      );
  
      let newTasks = [
        ...tasks,
        {
          id: taskWithGreaterId.id + 1,
          title,
          pomodoros: [],
          created: new Date(),
          time
        }
      ];
  
      setTasks(newTasks);
    };
  
    const update = patchedTask => {
      setTasks([
        ...tasks.filter(t => t.id !== patchedTask.id),
        patchedTask
      ]);
    };
  
    const remove = id => {
      setTasks(tasks.filter(t => t.id !== id));
    };
  
    return [tasks, create, update, remove];
  }