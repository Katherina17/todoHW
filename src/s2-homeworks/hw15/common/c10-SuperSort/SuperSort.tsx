import React from 'react'
import s from './SuperSort.module.css';

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    return sort === up ? '' :
        (sort.length === 0 || sort.charAt(0) !== down.charAt(0) || sort.charAt(1) !== down.charAt(1))
            ? down
            : up

    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
   // исправить  sort.charAt(0) === '0' ? '' : sort.length === 0 ? down: up
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ?  s.downIcon
        : sort === up
            ? s.upIcon
            : s.noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <div className={icon} id={id + '-icon-' + sort}>

            </div>

            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

           {/* {icon}*/}
        </span>
    )
}

export default SuperSort
