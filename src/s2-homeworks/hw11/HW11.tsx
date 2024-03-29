import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {BorderTitle} from "../hw01/border-title/BorderTitle";

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0,100]))

    const change = (event: Event, value: number | number[]) => {
        if(typeof value !== 'number'){
            setValue2([value[0], value[1]])
            setValue1(value[0])
        } else {
            setValue1(value)
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle} id={s2.wrapper}>Homework #11</div>
            <BorderTitle marginBottom={'76px'}/>
            <div className={s2.hw} id={s2.wrapper}>
                <div className={s.container} >
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                            step={1}
                            max={100}
                            defaultValue={0}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value2[0]}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={value2}
                            onChange={change}
                            step={1}
                            max={100}
                            defaultValue={0}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                    </div>
                </div>
            </div>
            <BorderTitle marginTop={'185px'} marginBottom={'35px'}/>
        </div>
    )
}

export default HW11
