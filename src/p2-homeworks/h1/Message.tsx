import React from 'react'
import styles from './Message.module.css'

type PropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

const Message: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <img src={props.avatar} alt="img" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <p>{props.name}</p>
          <p>{props.message}</p>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
