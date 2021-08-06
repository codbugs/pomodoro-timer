import { useState } from 'react';

export default function useTimer(frequency) {

    let [intervalId, setIntervalId] = useState(null);

    return {
        start(action) {
            if(intervalId === null) {
                setIntervalId(setInterval(action, frequency * 1000));
            }
        },

        stop() {
            if(intervalId !== null) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }
    };
}