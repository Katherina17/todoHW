import React from 'react'
import s2 from '../../s1-main/App.module.css'
import { BorderTitle } from '../hw01/border-title/BorderTitle'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <div className={s2.App}>
            <div id={'hw4'} className={s2.hw4}>
                <div className={s2.hwTitle} id={s2.wrapper}>Homework #4</div>
                <BorderTitle/>
                {/*демонстрация возможностей компонент:*/}
                <div className={s2.hw}>
                    <Stand />
                </div>
            </div>
        </div>
    )
}

export default HW4
