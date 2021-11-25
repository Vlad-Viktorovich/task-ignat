import React from 'react'
import s from './Message.module.css'

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.conteiner}>
            <img src={props.avatar} alt="avatar" className={s.avatar}/>

            <div className={s.text}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
