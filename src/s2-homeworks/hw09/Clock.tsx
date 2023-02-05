import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [isActive, setActive] = useState<boolean>(false)
    const start = () => {
        setTimerId(+setInterval( () => {
            setDate(new Date())
        }, 1000))
        setActive(true)
    }

    const stop = () => {
        setActive(false);
        clearInterval(timerId);
        setTimerId(undefined)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });


    const stringTime =  formatter.format(date) || <br/>

    let formatterFullTime = new Intl.DateTimeFormat("ru");
    const stringDate = formatterFullTime.format(date) || <br/>

    const options: {weekday: "long" | "short" | "narrow" | undefined} = {weekday: "long"};
    const stringDay = new Intl.DateTimeFormat("en-US", options).format(date)|| <br/>
    const stringMonth = date.toLocaleString("en-US", { month: 'long' }) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringDate}</span>,{' '}
                            <span id={'hw9-date'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={isActive}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!isActive}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
