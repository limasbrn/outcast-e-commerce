import React from 'react' ;
import { Link } from 'react-router-dom';

const CarrinhoPage =  ( ) => {
    return(
        <section>
                <div className='flex flex-col w-full items-center'>
                        <div className='flex justify-center w-full '>
                            <div className='flex w-4/5 bg-gray-800'>
                                <span className='flex font-semibold text-sm text-[#868686] mb-[30px]'> <Link to="/">Home</Link></span><span className='flex font-normal text-sm text-[#868686]'> &gt;  Carrinho</span>
                            </div>
                        </div>
                    <h1>Sacola page Outcast</h1>
                </div>
        </section>
    )

}

export default CarrinhoPage;