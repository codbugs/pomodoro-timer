import Button from './Button';

export default function PrimaryButton({ text, onAction }) {
    return <Button className="primary" text={ text } onAction={ onAction } />;
}