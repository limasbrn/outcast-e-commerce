import React from 'react' ;

function GrayBtn(props){
    return(
        <React.Fragment>
            <button className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-[#868686] rounded-[5px] items-center justify-center">{props.name}</button>
        </React.Fragment>
        
    )

}

export default GrayBtn;