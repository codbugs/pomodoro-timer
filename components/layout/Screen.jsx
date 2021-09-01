export default function Screen({ children, title }) {
    return <div className="screen">
        <header className="header">
            <h1 className="title">{ title }</h1>
        </header>
        { children }
    </div>;
}