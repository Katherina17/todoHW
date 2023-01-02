import React from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1';
import HW2 from '../s2-homeworks/hw02/HW2';
import HW4 from '../s2-homeworks/hw04/HW4';
import {BorderTitle} from "../s2-homeworks/hw01/border-title/BorderTitle";
import HW3 from "../s2-homeworks/hw03/HW3";

function App() {
    return (
        <div className={s.App}>
            <HW1/>
            <BorderTitle/>
            {/*раскомментировать по ходу выполнения*/}
            <HW2/>
            <BorderTitle/>
            <HW3/>
            <BorderTitle/>
            <HW4/>

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            {/*<HW5/>*/}
        </div>
    )
}

export default App
