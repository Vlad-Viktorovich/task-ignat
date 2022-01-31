import React, {ChangeEvent, InputHTMLAttributes} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : s.success // need to fix with (?:)

  return (
    <div className={s.greeting}>
      <input value={name} onChange={setNameCallback} className={inputClass}/>
      <span>{error}</span>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
