import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import s from './HW3.module.css';
import GreetingContainer from './GreetingContainer'
import {BorderTitle} from "../hw01/border-title/BorderTitle";

/*
* 1 - описать тип UserType +
* 2 - указать нужный тип в useState с users +
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами +
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов +
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error +
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback +
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами +
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) +
* 9 - в файле Greeting.tsx дописать типизацию пропсов +
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: (users:UserType[]) => void, users: Array <UserType>) => { // need to fix any
    const user: UserType = {
        _id: v1(),
        name: name// need to fixS
    }
    setUsers([...users, user])
}

const HW3 = () => {

    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div className={s2.hw3} id={'hw3'}>
            <div className={s2.hwTitle} id={s2.wrapper}>Homework #3</div>
            <BorderTitle/>
            {/*для автоматической проверки дз (не менять)*/}

            <div id={s2.wrapper}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
