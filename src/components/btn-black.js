import React from 'react' ;

function BlackBtn(props) {
    const {...restProps} = props

    return(
        <React.Fragment>
            <button className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-black rounded-[5px] items-center justify-center mb-[15px]" {...restProps}>{props.name}</button>
        </React.Fragment>
    )

}

export default BlackBtn;