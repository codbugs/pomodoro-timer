import StartButton from '../components/StartButton';
import StopButton from '../components/StopButton';

export default function Actions({ isRunning, onRestart, onStart, onStop }) {

    return <div className="actions">
        <StopButton onAction={ onStop } isAvailable={ isRunning } /> 
        <StartButton onAction={ onStart } isAvailable={ false === isRunning } />
    </div>;
}