import React from 'react' ;


function SelectType(props) {
    return(
        <>
        <div className='text-[12px] font-semibold border-black mt-[5px] mb-[15px]'>
           <input type="radio" name="webmaster" value="casa" /> Casa
           <input type="radio" name="webmaster" value="apartamento" className="ml-[15px]" /> Apartamento
           <input type="radio" name="webmaster" value="outros" className="ml-[15px]" /> Outros
        </div>
        </>
    )

}

export default SelectType;  