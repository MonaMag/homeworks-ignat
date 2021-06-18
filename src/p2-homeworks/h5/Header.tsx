import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from './Routes'

function Header() {
    return (
        <div className={s.header}>
                <nav className={s.menu}>
                    <NavLink to={PATH.PRE_JUNIOR}  activeClassName={s.menuActive}>PreJunior</NavLink>
                    <NavLink to={PATH.JUNIOR}  activeClassName={s.menuActive}>Junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.menuActive}>JuniorPlus</NavLink>
                    <span className={s.toggleBlock}/>
                </nav>

        </div>
    )
}

export default Header
