import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import {BorderTitle} from "../hw01/border-title/BorderTitle";

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    let isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    let dispatch = useDispatch();

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle} id={s2.wrapper} style={{marginTop: '47px'}}>Homework #10</div>
            <BorderTitle marginBottom={'42px'}/>
            <div className={s2.hw} id={s2.wrapper}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
            <BorderTitle marginTop={'264px'} marginBottom={'39px'}/>
        </div>
    )
}

export default HW10
