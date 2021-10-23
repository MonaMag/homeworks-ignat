import React from 'react'
import s from "./Message.module.css";
import {MessageDataType} from "./HW1";


function AlternativeMessage(props: MessageDataType) {
    return (
        <div className={s.message}>

            <img src={props.avatar} className={s.avatar}/>
            <div className={s.tellWrapper}>
                <div className={s.telling}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
