import React, {FC} from 'react'
import s from './Message.module.css'
import {Message as TMessage} from "../HW1";

// нужно создать правильный тип вместо any
type Props = {
    message: TMessage
}

// нужно отобразить приходящие данные
const Message: FC<Props> = ({message}) => {
    const {id, message: textMessage, user} = message;
    return (
        <div id={'hw1-message-' + id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + id}
                    // создаёт студент
                    src={user.avatar} alt='avatar'
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + id} className={s.name}>
                        {/*создаёт студент*/}
                        {user.name}
                        {/**/}
                    </div>
                    <span id={'hw1-text-' + id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {textMessage.text}
                        {/**/}
                    </span>
                </div>
            </div>
            <div id={'hw1-time-' + id} className={s.time}>
                {/*создаёт студент*/}
                {textMessage.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
