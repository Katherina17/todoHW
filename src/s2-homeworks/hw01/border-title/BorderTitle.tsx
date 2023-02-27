
type BorderTitlePropsType = {
    marginTop?: string,
    marginBottom?: string;
}

export const BorderTitle = (props: BorderTitlePropsType) => {
    const{marginTop, marginBottom} = props;
    const style = {
        border: '1px solid rgb(217 217 217 / 18%)'
        ,
        marginBottom: marginBottom,
        marginTop: marginTop
    }
    return (
        <div style={style}> </div>
    )
}