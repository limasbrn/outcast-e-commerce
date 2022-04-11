import React from 'react' ;
import { Link } from 'react-router-dom';
import ProductPhoto from '../images/naeim-jafari--VNyN-lZ1pE-unsplash.jpg'
import ShareIcon from '../icones/share-icon.svg'

const ProductPage=  ( ) => {
    return(
        <>
                <div className='flex flex-col w-full items-center'>
                    <div className='flex justify-center w-full '>
                        <div className='flex w-4/5'>
                            <span className='flex font-semibold text-sm text-[#868686] mb-[30px] mt-[15px]'> <Link to="/">Home</Link></span><span className='flex font-normal text-sm text-[#868686] mt-[15px]'> &gt;  Vitríne</span>
                        </div>
                    </div>

                    {/*div da imagem principal*/}
                    <div className='flex justify-center items-center  w-4/5 h-[420px]'>
                        <div className="flex w-3/6 h-full justify-start "> <div className="flex w-4/6 h-full justify-end items-center"><img className="h-full w-auto" src={ProductPhoto}/></div> </div>
                        <div className="flex flex-col w-2/6 h-full ">
                            <div className="flex w-full h-full ">
                                <div className="flex flex-col w-5/6 h-full ">
                                    <h1 className="font-semibold mt-[50px]">JAQUETA STARLA PAETÊ</h1>
                                    <span className="font-thin text-sm text-[#868686]" >Jaqueta cropped com estampa de estrelas</span>
                                    <span className="font-semibold">R$ 279,00</span>
                                    <div className="flex w-full h-[30px] mb-[15px] items-center">
                                        <div className="flex w-[15px] h-[15px] mr-[10px] border border-black bg-black"></div>
                                        <div className="flex w-[15px] h-[15px] border border-black bg-[#7C0101]"></div>
                                    </div>
                                    <div className="flex w-full h-[30px] items-center mb-[5px]">
                                        <div className="flex w-[135px] h-[30px] border border-[#868686] rounded-[5px] items-center justify-center font-thin text-sm text-[#868686]">Selecione seu tamanho</div>
                                    </div>
                                    <span className="font-thin text-sm text-[#868686] mb-[15px]">Tabela de tamanhos</span>
                                    <div className="flex w-full h-[35px] items-center mb-[10px] ">
                                        <div className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-[#868686] rounded-[5px] items-center justify-center "> ADICIONAR AOS FAVORITOS </div>
                                    </div>
                                    <div className="flex w-full h-[35px] items-center mb-[5px]">
                                        <div className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-black rounded-[5px] items-center justify-center "> COMPRAR </div>
                                    </div>
                                    <span className="font-thin text-sm text-[#868686] mb-[15px]">+ Detalhes sobre o produto</span>
                                    <div className="flex w-full h-auto"><span className="font-thin text-sm text-[#868686]">Compartilhar</span><img className="ml-[5px]" src={ShareIcon} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default ProductPage;