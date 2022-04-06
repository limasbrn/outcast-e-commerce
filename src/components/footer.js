import React from 'react' ;

const Footer =  ( ) => {
    return(
        <section className='flex w-full h-[120px] bg-black text-white items-center'>
            <div className='flex w-1/4 justify-center'>
                <ul  className='text-sm'>
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
            <div className='flex w-1/4 h-full bg-gray-800'></div>

            <div>
                <span className='flex w-1/4 tracking-[20px] text-center'>OUTCAST</span>
            </div>
        </section>
    )
}

export default Footer; 