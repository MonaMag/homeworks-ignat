import React, {useState} from 'react'
import {checkPeopleAC, homeWorkReducer, sortPeopleAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.item}>
            <span>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortPeopleAC('up') ))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortPeopleAC('down') ))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkPeopleAC(18) ))

    return (
        <div className={s.wrapper}>
            <hr/>

            <h3>homework 8</h3>
            {finalPeople}
<div className={s.sort}>
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={check18}> check 18</SuperButton></div>
</div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
