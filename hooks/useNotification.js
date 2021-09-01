import { useEffect, useState } from 'react';

export default function useNotification() {
    const DEFAULT_STATE = "default";
    const DENIED_STATE = "denied";
    const GRANTED_STATE = "granted";
    
    const [state, setState] = useState(DEFAULT_STATE);

    useEffect(() => {
        setState(Notification.permission);
    }, []);

    const request = () => {
        if(state !== DEFAULT_STATE) {
            return;
        }

        Notification.requestPermission().then(value => {
            setState(value);
        });
    };

    const send = ({ title, body }) => {
        if(DENIED_STATE === state) {
            return;
        }

        new Notification(title, {
            body,
            icon: './studying.png'
        });
    };

    return [state, request, send];
}