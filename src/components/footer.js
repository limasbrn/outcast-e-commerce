import React from 'react' ;
import PintIcon from '../icones/logo-pinterest.svg' ;
import FaceIcon from '../icones/logo-facebook.svg' ;
import InstaIcon from '../icones/logo-Instagram.svg' ;

const Footer =  ( ) => {
    return(
        <>  
            <section className="flex flex-col sm:hidden w-full h-[140px] bg-black text-white justify-center items-center">
                 <div className="flex w-full h-[35px] mt-[15px] justify-center items-center">
                    <span className='flex w-[80%] tracking-[20px] justify-center text-white'>OUTCAST</span>
                 </div>
                 <div className="flex flex-col h-[45px] w-full justify-center items-center">
                     <span className="flex w-[80%] h-auto justify-left text-[12px]" >quem somos</span>
                     <span className="flex w-[80%] h-auto justify-left text-[12px]" >central de atendimento</span>
                 </div>
                 <div className="flex flex-col h-[45px] w-[80%] justify-center">
                     <span><strong>Outcast</strong> &copy; 2022</span> 
                 </div>
            </section>
            
            {/* Footer desktop */}
            <section className='hidden sm:flex w-full h-[120px] bg-black text-white items-center'>
                <div className='flex w-1/4 justify-center '>
                    <ul  className='text-sm pl-[40px]'>
                        <li className='font-semibold text-sm'>SOBRE A OUTCAST</li>
                        <li>lojas</li>
                        <li>quem somos</li>
                    </ul>
                </div>

                <div className='flex w-1/4 justify-center'>
                    <ul className=' text-sm' >
                        <li className=' font-semibold text-sm'>CENTRAL DE ATENDIMENTO</li>
                        <li>SAC: (11) 4005-96548</li>
                        <li>atendimentoemail@outcast</li>
                    </ul>
                </div>

                {/* Aqui por as imagens */}
             <div className='flex w-1/4 h-full'>
                    <img className='w-[20px] md:w-[25px] h-auto mr-[20px] md:mr-[30px] lg:mr-[40px] ml-[40px]' src={PintIcon}/>
                    <img className='w-[20px] md:w-[25px] h-auto mr-[20px] md:mr-[30px] lg:mr-[40px]' src={FaceIcon}/>
                    <img className='w-[20px] md:w-[25px] h-auto' src={InstaIcon}/>
                </div>

                <div>
                    <span className='flex w-1/4 tracking-[10px] md:tracking-[20px] text-center'>OUTCAST</span>
                </div>
            </section>
        </>
    )
}

export default Footer; 