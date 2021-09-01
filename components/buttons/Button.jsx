export default function Button({ className, text, onAction }) {
    return <button className={ 'button ' + className } type="button" onClick={ onAction }>{ text }</button>;
}