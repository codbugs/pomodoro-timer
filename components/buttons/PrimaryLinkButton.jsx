import Button from './Button';

export default function PrimaryLinkButton({ text, onAction }) {
    return <Button className="link primary" text={ text } onAction={ onAction } />;
}