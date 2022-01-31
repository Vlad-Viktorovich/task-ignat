import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }

  return (
    <div className={styles.affair}>
      <div>{props.affair.name}</div>
      <div>{props.affair.priority}</div>
      <div><button onClick={deleteCallback}>X</button></div>
    </div>
  )
}

export default Affair
