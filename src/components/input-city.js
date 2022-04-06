import React from 'react' ;


function InputCity() {
    return(
        <>
           <div className="flex w-[300px] flex-row justify-start h-[60px] mt-[5px] mb-[15px]">
               <div className=" mr-[20px]">
                    <span className="text-[12px] font-semibold">Estado</span>
                    <input type="text" className="flex w-[40px] h-[20px] border b-[1px] border-black rounded-[5px]"></input>
               </div>
               <div className="">
                    <span className="text-[12px] font-semibold">Cidade</span>
                    <input type="text" className="flex w-[140px] h-[20px] border b-[1px] border-black rounded-[5px]"></input>
               </div>
           </div>
        </>
    )

}

export default InputCity;  