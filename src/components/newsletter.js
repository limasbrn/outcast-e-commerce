import React from 'react' ;

const Newsletter =  ( ) => {
    return(

    <section className='flex w-full h-[235px] items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <span className='flex font-semibold text-lg'>Assine a nossa newsletter</span>

            <div>
                <input type='email' placeholder='E-mail' className='w-[315px] h-[35px] border-[1px] border-[#868686] rounded-[5px] mr-[15px] mt-[10px] p-[10px]'></input>
                <button type='submit' className='w-[100px] h-[35px] rounded-[5px] text-white text-[14px] bg-black'>Enviar</button>
            </div>

        </div>
    </section>


        )
}
    
export default Newsletter;