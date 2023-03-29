import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'
import s2 from '../../HW15.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
    setCount: (num: number) => void

}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page,
    setCount,
        itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц
    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (num: number) => {
        setCount(num)

    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .Mui-selected': {backgroundColor: '#0066CC', color: 'white'},

                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
                shape="rounded"
            />
            <span className={s.text1}>
                показать
            </span>
            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
                className={s2.selectPagination}
                modalClassName={s2.modalSelectPagination}
            />
            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
