import { useRef, useState } from 'react';

import { CancelButton, PrimaryButton } from '../buttons';
import { Actions, Content, Screen } from '../layout';
import Spinner from '../Spinner';
import Text from '../Text';


export default function NewTaskScreen({ tasks, onCancel, onSave }) {
    const titleRef = useRef();
    const timeRef = useRef();
    const [titleError, setTitleError] = useState(null);
    const [timeError, setTimeError] = useState(null);
  
    if(null === tasks) {
      return <Spinner />;
    }
  
    const onSaveHandler = () => {
      const isTitleNull = titleRef.current.value === null;
      const isTitleEmpty = titleRef.current.value.trim() === '';
  
      if(isTitleNull || isTitleEmpty) {
        setTitleError('Title must be provided');
        return;
      }
  
      setTitleError(null);
      
      const isTimeNull = timeRef.current.value === null;
      const isTimeNaN = isNaN(parseInt(timeRef.current.value));
      const isTimeLessThan1 = !isTimeNull && !isTimeNaN && parseInt(timeRef.current.value) < 1;
      const isTimeBiggerThan60 = !isTimeNull && !isTimeNaN && parseInt(timeRef.current.value) > 60;
  
      if(isTimeNull || isTimeNaN || isTimeLessThan1 || isTimeBiggerThan60) {
        setTimeError('Time must be provided and be a number greater than 0 and less or equal than 60');
        return;
      }
      
      setTimeError(null);
  
      onSave({
        title: titleRef.current.value.trim(),
        time: parseInt(timeRef.current.value) * 60
      });
    };
  
    return <Screen title="Creating a new task">
      <Content>
        <Text>Enter the name of the new task and assign a standard time for each pomodoro.</Text>
        <div className="form">
          <div className="field">
            <label className="label">Title:</label>
            <input type="text" ref={ titleRef } />
            <small>The title will appear to identify the task</small>
            { titleError !== null && <span className="error">{ titleError }</span> }
          </div>
          <div className="field">
            <label className="label">Time per pomodoro in minutes:</label>
            <input type="number" min="0" ref={ timeRef } defaultValue={ 25 } />
            <small>The time will be the amount of time to be focused. It could be changed in the pomodoro screen. Integers greater than 0 are valid.</small>
            { timeError !== null && <span className="error">{ timeError }</span> }
          </div>
        </div>  
      </Content>
      <Actions>
        <PrimaryButton text="Save" onAction={ () => onSaveHandler() } />
        <CancelButton onAction={ onCancel } />
      </Actions>
    </Screen>;
  }