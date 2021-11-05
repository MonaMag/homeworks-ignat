import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from './Routes'

function Header() {
    return (
        <div>
            <nav className={s.menu}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.activeLink}>PRE_JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.activeLink}>JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.activeLink}>JUNIOR_PLUS</NavLink>
                <div className={s.toggle}/>
            </nav>
        </div>
    )
}

export default Header
