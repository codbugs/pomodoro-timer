import { useState } from 'react';

export default function useBoolean(initial_value) {
    const [value, setValue] = useState(initial_value);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return [value, setTrue, setFalse];
}