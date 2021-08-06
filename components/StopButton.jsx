import Button from './Button';

export default function StopButton({ onAction, isAvailable }) {
    return <Button className="stop" text="Stop" onAction={ onAction } isAvailable={ isAvailable } />;
}