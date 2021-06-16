import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css';



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
        <div className={s.wrapper}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={`${s.item} ${s[props.affair.priority]}`}>
                [{props.affair.priority}]
            </div>

            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}
export default Affair
