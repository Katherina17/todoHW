import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    useState, KeyboardEvent
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {

    const [isSelectedValue, setIsSelectedValue] = useState(false);
    let currValue = options!.find(el => el.id === restProps.value);
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        for(let i = 0; i < options!.length; i++){
            if(e.keyCode === 40 && (currValue && currValue.id) === options![i].id){
                if(i === options!.length - 1) break
                if(onChangeOption) onChangeOption(options![i+1].id)
                break;
            } else if(e.keyCode === 38 && (currValue && currValue.id) === options![i].id){
                if(i === 0) break;
                if(onChangeOption) onChangeOption(options![i-1].id)
                break;
            }
            if(e.code === 'Enter'){
                setIsSelectedValue(false)
            }
        }
    }
    const onClickHandler = () => {
        setIsSelectedValue(!isSelectedValue)
    }
    return (
        <>
            <div className={s.select} onClick={onClickHandler} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span>{currValue && currValue.value}</span>
                <div className={ isSelectedValue ? s.arrowActive : s.arrow}></div>
            </div>
            <div>
                {isSelectedValue &&   <ModalSelectValues selectData={options}
                                                         callBack={onChangeOption}
                                                         selectedValue={restProps.value}
                                                         isSelectedValue={isSelectedValue}
                                                         setIsSelectedValue={setIsSelectedValue}/>
                }
            </div>
        </>
    )
}

type ModalSelectValues = {
    selectData: any[] | undefined;
    callBack: ((option: any) => void) | undefined
    selectedValue: string | number | readonly string[] | undefined;
    isSelectedValue: boolean;
    setIsSelectedValue: (val: boolean) => void
}

const ModalSelectValues = (props: ModalSelectValues) => {
    const addCallBacks = (id: number) => {
        props.callBack?.(id);
        props.setIsSelectedValue(!props.isSelectedValue)
    }
    const mappedOptions = props.selectData ? props.selectData.map(el => {
            return (
                <p className={props.selectedValue === el.id ? s.targetItem : ''}
                     key={el.id}
                     onClick={() => addCallBacks(el.id)}
                   style={{}}
                >{el.value}</p>
            )
        }
    ) : []
    return (
        <div className={s.modalSelectValues}>
            {mappedOptions}
        </div>
    )
}

export default SuperSelect