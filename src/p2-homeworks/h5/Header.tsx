import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import { PATH } from './Routes'

function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className={s.header}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.activeLink}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.activeLink}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.activeLink}>junior-plus</NavLink>
                <span className={s.toggleBlock} onClick={ () => setToggle(true)}/>
            {toggle && <span className={s.toggleBlock} onClick={() => setToggle(false)}/>}
        </div>
    )
}

export default Header
