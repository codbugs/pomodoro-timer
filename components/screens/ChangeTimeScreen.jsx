import { useRef, useState } from 'react';

import { CancelButton, PrimaryButton } from '../buttons';
import { Actions, Center, Content, Screen } from '../layout';
import Text from '../Text';


export default function ChangeTimeScreen({ task, onCancel, onSave }) {
    const timeRef = useRef();
    const [timeError, setTimeError] = useState(null);
  
    const onSaveHandler = () => {
      const isTimeNull = timeRef.current.value === null;
      const isTimeNaN = isNaN(parseInt(timeRef.current.value));
      const isTimeLessThan1 = !isTimeNull && !isTimeNaN && parseInt(timeRef.current.value) < 1;
      const isTimeBiggerThan60 = !isTimeNull && !isTimeNaN && parseInt(timeRef.current.value) > 60;
  
      if(isTimeNull || isTimeNaN || isTimeLessThan1 || isTimeBiggerThan60) {
        setTimeError('Time must be provided and be a number greater than 0 and less or equal than 60');
        return;
      }
      
      setTimeError(null);
  
      onSave(parseInt(timeRef.current.value) * 60);
    };
  
    return <Screen title="Change pomodoro time">
      <Content>
        <Center>
          <Text>Enter the pomodoro time for the task <div className="emphasis">{ task.title }</div>.</Text>
        </Center>
        <div className="form">
          <div className="field">
            <label className="label">New time (in minutes):</label>
            <input type="number" min="0" ref={ timeRef } defaultValue={ Math.floor(parseInt(task.time) / 60) } />
            <small>The time will be the amount of minutes to be focused. It could be changed in the pomodoro screen. Integers greater than 0 are valid.</small>
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