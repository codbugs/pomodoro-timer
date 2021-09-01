import Button from './Button';

export default function CancelButton({ onAction }) {
    return <Button text="Cancel" onAction={ onAction } />;
}