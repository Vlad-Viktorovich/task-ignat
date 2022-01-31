import React from 'react'
import Message from './Message'

type messageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

const messageData: messageDataType = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Jylia Angel',
  message: 'Hello! How are you?',
  time: '22:00',
}

function HW1() {
  return (
    <div>
      <hr/>
      <h2>homeworks 1</h2>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr/>
      <hr/>
    </div>
  )
}

export default HW1
