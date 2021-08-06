export default function NotificationService() {
    return {
        send({ title, body, icon }) {
            let options = { body, icon };

            return new Notification(title, options);
        }
    };
}