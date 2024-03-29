import React, {useEffect, useState} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, themeStateType} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";
import {BorderTitle} from "../hw01/border-title/BorderTitle";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер +
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId);
    const dispatch = useDispatch();

    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }
    console.log(themeId)

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={s2.wrapper} className={s2.hwTitle}>
                Homework #12
            </div>
            <BorderTitle marginBottom={'33px'}/>

            <div className={s2.hw} id={s2.wrapper}>
                <span className={s.changeTheme}> Выберите тему</span>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    value={themeId}
                    onChangeOption={change}
                    // сделать переключение тем

                />
            </div>
            <BorderTitle marginTop={'244px'} marginBottom={'36px'}/>
        </div>
    )
}

export default HW12
