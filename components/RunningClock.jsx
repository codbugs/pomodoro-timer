export default function RunningClock({ text }) {
    return <div className={ 'clock running' }>
        <span className="text">{ text }</span>
    </div>;
}