import React from 'react' ;


function LittleInputCad(props) {
    return(
        <div className="flex flex-col  w-[300px] h-[60px] mt-[5px] mb-[15px]">
           <h3 className='text-[12px] font-semibold'>{props.h3}</h3>
           <input type="text" placeholder='(00)00000-0000'className='flex w-[140px] h-[20px] border-b-[1px] border-black text-[13px]'></input>
        </div>
    )

}

export default LittleInputCad; 