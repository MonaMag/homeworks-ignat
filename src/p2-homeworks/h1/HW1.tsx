import React from 'react'
import Message from "./Message";


export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = [
    {
        avatar: 'http://www.irimpanfamily.com/wp-content/uploads/2019/03/1246f50e9d.png',
        name: 'Mona',
        message: 'Hi! How are you?',
        time: '22:00',
    },
    {
        avatar: 'https://img.itch.zone/aW1nLzIxOTMwNzgucG5n/original/EPZZJi.png',
        name: 'Sasha',
        message: 'Hi! Fine! And you?',
        time: '22:02',
    },
    {
        avatar: 'https://img.itch.zone/aW1nLzIxOTMwNzgucG5n/original/EPZZJi.png',
        name: 'Sasha',
        message: 'Hi! Fine! And you?',
        time: '22:02',
    }
]

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}
            />
            <hr/>

            <Message
                avatar={messageData[1].avatar}
                name={messageData[1].name}
                message={messageData[1].message}
                time={messageData[1].time}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;


