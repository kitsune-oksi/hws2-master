import React, { FC } from 'react'
import s from './FriendMessage.module.css'
import {Message} from "../HW1";

type Props = {
    message: Message
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage: FC<Props> = ({message}) => {
    const {id, message: textMessage, user} = message;
    return (
        <div
            id={'hw1-friend-message-' + id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + id}
                    // создаёт студент
                    src={user.avatar} alt='avatar'
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {user.name}
                        {/**/}
                    </div>
                    <span
                        id={'hw1-friend-text-' + id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {textMessage.text}
                        {/**/}
                    </span>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {textMessage.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
