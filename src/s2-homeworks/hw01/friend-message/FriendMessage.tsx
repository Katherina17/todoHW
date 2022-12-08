import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные

type FriendMessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.imageAndTime}>
                    <img
                        id={'hw1-friend-avatar-' + props.message.id}
                        alt={props.message.user.name}
                        src={props.message.user.avatar}
                    />
                    <p id={'hw1-friend-time-' + props.message.id}
                        className={s.friendTime}>
                        {props.message.message.time}
                    </p>
                </div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <span>{props.message.user.name} </span>
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default FriendMessage
