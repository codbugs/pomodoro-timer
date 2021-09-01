import { cloneElement, Children } from 'react';

export default function List({ children, source }) {
    return <ul className="list tasks">{
        source.map((item, index) => <li key={ index }>{ Children.map(children, component => cloneElement(component, { item })) }</li>)
    }</ul>;
}