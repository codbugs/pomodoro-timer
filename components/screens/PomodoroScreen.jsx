import { useTimer } from '../../hooks';

import { Button, PrimaryButton } from '../buttons';
import { Actions, Center, Content, Screen } from '../layout';
import Text from '../Text';
import Timer from '../Timer';


export default function PomodoroScreen({ task, onCancel, onPomodoroEnd, onChangeTime }) {
    let [time, isRunning, start, stop] = useTimer(onPomodoroEnd);
  
    const formatMinutes = time => {
      return Math.floor(parseInt(time) / 60);
    };
  
    return <Screen title="Pomodoro">
      <Content>
        <Center>
          <Text>
            You will start the count of <div className="emphasis">{ formatMinutes(task.time) }</div> minutes to be focused on the task <div className="emphasis">{ task.title }</div> and avoid any other distraction that does not allow you to attend. Approaching the end, you will receive a message advising you of the completion of the Pomodoro to restart another period or select another task.
          </Text>
          <Timer time={ isRunning ? time : task.time } isRunning={ isRunning } />
        </Center>
      </Content>
      <Actions>
        { !isRunning && <>
            <PrimaryButton text="Start" onAction={ () => start(task.time) } /> 
            <Button text="Change time" onAction={ () => onChangeTime(task) } />
          </>
        }
        { isRunning && <PrimaryButton text="Stop" onAction={ () => stop() } /> }
        <Button text="Return" onAction={ () => { stop(); onCancel(); } } />
      </Actions>
    </Screen>;
  }