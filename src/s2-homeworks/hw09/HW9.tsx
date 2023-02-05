import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'
import {BorderTitle} from "../hw01/border-title/BorderTitle";

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth +
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <div id={'hw9'}>
            <div className={s2.hwTitle} id={s2.wrapper}>Homework #9</div>
            <BorderTitle marginBottom={'26px'}/>
            <div className={s2.hw} id={s2.wrapper}>
                <Clock />
            </div>
        </div>
    )
}

export default HW9
