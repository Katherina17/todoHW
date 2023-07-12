import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import {BorderTitle} from "../hw01/border-title/BorderTitle";

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

type ParamsType = {
    page: string,
    count: string,
    sort: string
}


const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [idLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])
    const sendQuery = (params: ParamsType) => {
        setLoading(true)
        getTechs(params)
            .then((res) => {
                if(res !== undefined){
                    setTechs(res.data.techs)
                    setTotalCount(res.data.totalCount)
                    setLoading(false)
                }
            })
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент
        setPage(newPage)
        setCount(newCount)
        sendQuery( {page: String(newPage), count: String(newCount), sort: sort})
        setSearchParams({page: String(newPage), count: String(newCount), sort: sort})
        setSearchParams(sort)
    }

    const onChangeSort = (newSort: string) => {
        // делает студент

        setSort(newSort)
        setPage(1)
        sendQuery({page: String(page), count: String(count), sort: newSort})
        setSearchParams({page: String(page), count: String(count), sort: sort})
        setSearchParams(sort)
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery({page: params.page, count: params.count, sort: sort})
        setPage(+params.page || 1)
        setCount(+params.count || 4)
    }, [])



    useEffect(() => {
        sendQuery({page: String(page), count: String(count), sort: sort})
    }, [count, sort])

    const mappedTechs = techs.map((t, index) => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={techs.length-1 === index ? s.tech + ' ' + s.techWithoutBorder : s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={ techs.length-1 === index ? s.tech + ' ' + s.techWithoutBorder : s.tech }>
                {t.developer}
            </div>
        </div>

    ))

    const loadingHeightStyle = {
        minHeight: count === 10 ? '517px' : count === 7 ? '400px' : '217px'
    }

    return (
        <div id={'hw15'} style={{paddingBottom: '114px'}}>
            <div className={s2.hwTitle} id={s2.wrapper}>Homework #15</div>
            <BorderTitle marginBottom={'32px'}/>
            <div className={s2.hw} id={s2.wrapper}>
                <SuperPagination
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}
                    setCount={setCount}
                />
                {idLoading && <div className={s.loadingContainer} style={loadingHeightStyle}> <div id={'hw15-loading'} className={s.loading}></div> </div>}
                <div className={s.rowHeader}>
                    <div className={s.techHeader}>
                        tech
                        <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                    </div>

                    <div className={s.developerHeader}>
                        developer
                        <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                    </div>
                </div>

                {mappedTechs}
            </div>
            <BorderTitle marginTop={'112px'}/>
        </div>
    )
}

export default HW15
