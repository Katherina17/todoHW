import s4 from './BorderTitle.module.css';

type BorderTitlePropsType = {
    marginTop?: string,
    marginBottom?: string;
}

export const BorderTitle = (props: BorderTitlePropsType) => {
    const{marginTop, marginBottom} = props;
    return (
        <div className={s4.borderTitle} style={{marginTop: marginTop, marginBottom: marginBottom}}> </div>
    )
}