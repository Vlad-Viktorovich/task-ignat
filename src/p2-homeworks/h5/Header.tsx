import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import {PATH} from "./Routes";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navClassName = `${!isOpen ? styles.header : styles.headerActive}`

  const onClickToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <nav className = {navClassName}>
        <div>
          <NavLink to={PATH.PRE_JUNIOR} activeClassName=''>Pre Junior</NavLink>
        </div>
        <div>
          <NavLink to={PATH.JUNIOR} activeClassName=''>Junior</NavLink>
        </div>
        <div>
          <NavLink to={PATH.JUNIOR_PLUS} activeClassName=''>Junior +</NavLink>
        </div>
        <div className={styles.toggle} onClick={onClickToggle}>
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </nav>
    )
}

export default Header
