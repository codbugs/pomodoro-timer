import InitialClock from './InitialClock';
import RunningClock from './RunningClock';

export default function Clock({ text, isRunning }) {
    return isRunning
        ? <RunningClock text={ text } />
        : <InitialClock text={ text } />;
}