import { useEffect, useState } from 'react';

export default function usePersistedData(key, default_value) {

    const [persistedData, setPersistedData] = useState(default_value);

    useEffect(() => {
        const value = localStorage.getItem(key);
        const isNotNull = value !== null;
        const isNotUndefined = value !== undefined;

        setPersistedData(isNotNull && isNotUndefined
        ? JSON.parse(value)
        : default_value);
    }, []);

    const save = data => {
        setPersistedData(data);
        localStorage.setItem(key, JSON.stringify(data));
    };

    return [persistedData, save];
}