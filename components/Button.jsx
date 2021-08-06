export default function Button({ className, text, isAvailable, onAction }) {

    let cssClasses = 'button' + ' ' + className + (isAvailable ? '' : ' unavailable');

    return <button className={ cssClasses } type="button" onClick={() => onAction()}>{ text }</button>;
}