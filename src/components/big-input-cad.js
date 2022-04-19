import React from 'react' ;


function BigInputCad(props) {
    return(
        <>
           <h3 className='text-[12px] font-semibold'>{props.h3}</h3>
           <input type="text" className='flex w-[100%] h-[20px] border-b-[1px] border-black mt-[5px] mb-[15px]'></input>
        </>
    )

}

export default BigInputCad;  