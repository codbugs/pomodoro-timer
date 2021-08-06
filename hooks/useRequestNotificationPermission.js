import { useEffect } from 'react';

export default function useRequestNotificationPermission(onSuccess, onReject) {
    useEffect( () => {
        Notification.requestPermission().then(onSuccess, onReject);
    });
}