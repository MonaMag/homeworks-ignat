import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    /* const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
         if (e.currentTarget.value.indexOf(' ') >= 0) {
             setError('Please, enter a name without spaces!')
             return
         } else {
             setError('')
         }
         setName(e.currentTarget.value)
     }
     const addUser = () => {
         if (name === '') {
             setError('Enter a name, please!')
             return
         }
         setError('')
         addUserCallback(name)
         alert(`Hello, ${name}!`)
         setName('')
     }

 */
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setName(e.currentTarget.value);
            setError('');
        } else {
            setName('');
            setError('Name is required');
        }

    }

    const addUser = () => {
        if (name === '') {
            setError('Enter a name, please!')
            return
        }
        setError('')
        addUserCallback(name);
        alert(`Hello  ${name}!`);
        setName('');
    }
    const onKeyEnterPress = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            onKeyEnterPress={onKeyEnterPress}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
