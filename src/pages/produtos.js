import React from 'react' ;
import { Link } from 'react-router-dom';

const ProductPage=  ( ) => {
    return(
        <>
                <div className='flex flex-col w-full items-center'>
                    <div className='flex justify-center w-full '>
                        <div className='flex w-4/5 bg-gray-800'>
                            <span className='flex font-semibold text-sm text-[#868686] mb-[30px]'> <Link to="/">Home</Link></span><span className='flex font-normal text-sm text-[#868686]'> &gt;  Vitríne</span>
                        </div>
                    </div>

                    {/*div da imagem principal*/}
                    <div className='flex justify-center items-center  w-4/5 h-[420px] bg-red-400'>
                        <div className="flex w-3/6 h-full justify-start bg-gray-800"> <div className="flex w-4/6 h-full bg-gray-500"></div> </div>
                        <div className="flex flex-col w-2/6 h-full bg-gray-400">
                            <div className="flex w-full h-full bg-gray-400">
                                <div className="flex flex-col w-5/6 h-full bg-gray-300 ">
                                    <h1 className="font-semibold mt-[50px]">JAQUETA STARLA PAETÊ</h1>
                                    <span className="font-thin text-sm text-[#868686]" >Jaqueta cropped com estampa de estrelas</span>
                                    <span className="font-semibold">R$ 279,00</span>
                                    <div className="flex w-full h-[30px] mb-[15px] items-center bg-red-100">
                                        <div className="flex w-[15px] h-[15px] mr-[10px] border border-black"></div>
                                        <div className="flex w-[15px] h-[15px] border border-black"></div>
                                    </div>
                                    <div className="flex w-full h-[30px] items-center mb-[5px] bg-red-100">
                                        <div className="flex w-[135px] h-[30px] border border-[#868686] rounded-[5px] items-center justify-center font-thin text-sm text-[#868686]">Selecione seu tamanho</div>
                                    </div>
                                    <span className="font-thin text-sm text-[#868686] mb-[15px]">Tabela de tamanhos</span>
                                    <div className="flex w-full h-[35px] items-center mb-[10px] bg-red-100">
                                        <div className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-[#868686] rounded-[5px] items-center justify-center "> ADICIONAR AOS FAVORITOS </div>
                                    </div>
                                    <div className="flex w-full h-[35px] items-center mb-[5px] bg-red-100">
                                        <div className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-black rounded-[5px] items-center justify-center "> COMPRAR </div>
                                    </div>
                                    <span className="font-thin text-sm text-[#868686] mb-[15px]">+ Detalhes sobre o produto</span>
                                    <span className="font-thin text-sm text-[#868686] mb-[15px]">Compartilhar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default ProductPage;