export default function Timer({ time, isRunning }) {
  
    const formatTime = time => {
      const minutes = Math.floor(parseInt(time) / 60);
      const seconds = parseInt(time) % 60;
  
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    return <div className={ 'timer' + (isRunning ? ' running' : '') }>
      <div className="value">{ formatTime(time) }</div>
    </div>;
  }