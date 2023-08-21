import { NotificationTitle } from "components/App.styled"

export const Notification =({message}) => {
    return (
        <div>            
            <NotificationTitle>{message}</NotificationTitle>
        </div>
    )
}