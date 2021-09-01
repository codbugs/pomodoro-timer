import Button from './Button';

export default function LinkButton({ text, onAction }) {
    return <Button className="link" text={ text } onAction={ onAction } />;
}