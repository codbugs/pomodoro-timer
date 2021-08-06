import NotificationEntity from "./NotificationEntity";

export default function NotificationCreator() {
    return {
        create() {
            let title = 'Pomodoro Notification';
            let body = 'Your time has ended!!!\nTake some minutes to relax before starting a new period.';
            let icon = 'https://pomodoro-timer.info/img/pomodoro-technique-timer.png';

            return new NotificationEntity({ title, body, icon });
        }
    }
}