import Button from './Button';

export default function StartButton({ onAction, isAvailable }) {
    return <Button className="start" text="Start" onAction={ onAction } isAvailable={ isAvailable } />;
}