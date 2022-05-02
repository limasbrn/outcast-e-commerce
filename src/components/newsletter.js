import React, { useState } from "react";
import ModalNews from "../components/modal-newsletter";

function Newsletter ( ) {

    const [isOpen, setOpen] = useState(false);

  const handleOpenMod = () => {
    setOpen((state) => !state);
  };


    return(

    <section className='flex w-full h-[235px] items-center justify-center relative'>
        <div className='flex flex-col items-center justify-center'>
            <span className='flex font-semibold text-lg'>Assine a nossa newsletter</span>

            <div className="flex w-[80%] h-full justify-center items-center mt-[10px] md:w-full ">
                <input type='email' placeholder='E-mail' className='flex w-[315px] h-[35px] border-[1px] border-[#868686] rounded-[5px] mr-[10px] md:mr-[15px] md:mt-[10px] p-[10px]'></input>
                <button type='submit' className='w-[100px] h-[35px] rounded-[5px] text-white text-[14px] bg-black self-center' onClick={handleOpenMod} >Enviar</button>
            </div>

        </div>
        <ModalNews state={isOpen} handleActive={handleOpenMod} />
    </section>


        )
}
    
export default Newsletter;