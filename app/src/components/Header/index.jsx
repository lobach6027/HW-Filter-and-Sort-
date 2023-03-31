import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'
export default function Header() {

    const isActive =({isActive}) => (isActive?s.active:'')
  return (
    <header className={s.wrapper}>
      <nav className={s.navigation}>
        <NavLink className={isActive} to="/">
          Add new product
        </NavLink>
        <NavLink className={isActive} to="/sort">
          Search and sort
        </NavLink>
      </nav>
    </header>
  );
}
