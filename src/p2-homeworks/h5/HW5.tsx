import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import s from './Header.module.css'

function HW5() {
    return (
        <div className={s.wrapper}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
