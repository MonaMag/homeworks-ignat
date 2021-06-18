import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div  className={s.error}>404</div>
            <div className={s.errorText}>Page not found!</div>
            <div className={s.errorText2}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
