import React from 'react' ;

function InputPass(props) {
    return(
        <>
            <h3 className='text-[12px] font-semibold'>{props.h3}</h3>
            <input type="password" className="flex w-[300px] h-[20px] border-b-[1px] border-black font-thin text-sm text-[#868686] mt-[5px] mb-[15px]"></input>
        </>
    )
    
}

export default InputPass;