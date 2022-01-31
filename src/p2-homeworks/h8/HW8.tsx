import React, {useReducer, useState} from 'react'
import {checkAC, homeWorkReducer, HomeWorkReducerType, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople: Array<UserType> = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  // const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any
  const [people, dispatchPeople] = useReducer(homeWorkReducer, initialPeople)

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px'
  }
  // need to fix any
  const finalPeople = people.map((p: UserType) => (
    <div style={styles} key={p._id}>
      <span>{p.name}</span>
      <span>{p.age}</span>
    </div>
  ))

  // const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
  const sortUp = () => dispatchPeople(sortAC('up'))
  const sortDown = () => dispatchPeople(sortAC('down'))

  const ageForCheck = 18
  const checkAge = () => dispatchPeople(checkAC(ageForCheck))

  return (
    <div>
      <hr/>
      <h2>homeworks 8</h2>

      {/*should work (должно работать)*/}
      {finalPeople}

      <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
      <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
      <div><SuperButton onClick={checkAge}>check {ageForCheck}</SuperButton></div>


      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr/>
    </div>
  )
}

export default HW8
