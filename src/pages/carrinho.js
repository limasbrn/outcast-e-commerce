import React from 'react' ;
import HomeLink from '../components/home-link';
import PageTitle from '../components/page-title';
import GrayBtn from '../components/btn-gray';
import BlackBtn from '../components/btn-black';


function CarrinhoPage() {
    return(
        <section>
               <HomeLink page='Sacola'/>
               <PageTitle h1='SACOLA'/> 
               <div className="flex w-full h-[300px] justify-center">
                   <div className="flex w-4/5 h-full bg-red-400 justify-center">
                       <div className="flex flex-col justify-between items-center w-2/6 h-full bg-gray-200">
                           <div className="flex w-5/6 h-[135px] bg-red-100">
                               <div className="flex w-[120px] h-full justify-center items-center bg-red-200">
                                   Photo space
                               </div>
                               <div className="flex flex-col w-[100%]">
                                   <h2 className="font-semibold text-[14px]">JAQUETA PAETÊ STARLA</h2>
                                   <span className="flex w-full h-auto flex-row text-sm text-[#868686]">Tamanho: GG</span>
                                   <div className="flex w-full h-auto flex-row text-sm text-[#868686]">
                                       <span>Qtd:</span>  
                                       <div className="w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#868686] justify-center pl-[5px] ml-[5px]">1</div>
                                   </div>
                                   <div className="flex font-semibold justify-end items-end w-[95%] h-[70px]">R$ 279,00</div>
                               </div>
                           </div>
                           <div className="flex w-5/6 h-[135px] bg-red-200">
                           <div className="flex w-[120px] h-full justify-center items-center bg-red-200">
                                   Photo space
                               </div>
                               <div className="flex flex-col w-[100%]">
                                   <h2 className="font-semibold text-[14px]">CONJUNTO MONIQUE TULE</h2>
                                   <span className="flex w-full h-auto flex-row text-sm text-[#868686]">Tamanho: GG</span>
                                   <div className="flex w-full h-auto flex-row text-sm text-[#868686]">
                                       <span>Qtd:</span>  
                                       <div className="w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#868686] justify-center pl-[5px] ml-[5px]">1</div>
                                   </div>
                                   <div className="flex font-semibold justify-end items-end w-[95%] h-[70px]">R$ 256,00</div>
                               </div>
                           </div>
                       </div>
                       <div className="flex w-2/6 h-full rounded-[5px] justify-center items-center bg-gray-100">
                           <div className="flex flex-col w-5/6 h-5/6 justify-center bg-red-300">
                               <h1 className="font-semibold mb-[10px]">TOTAL:</h1>
                               <h1 className="font-semibold mb-[15px]">R$ 535,00</h1>
                               <span className="w-[80%] text-center self-center text-[#868686] text-[12px] mb-[15px]">Esta compra é elegível as regras de <strong>FRETE GRÁTIS</strong></span>
                               <div className="flex flex-col w-full h-auto items-center justify-around">
                                    <GrayBtn name="CONTINUAR COMPRANDO"/>
                                    <BlackBtn name="FINALIZAR COMPRAS"/>
                               </div>
                               
                           </div>
                       </div>
                   </div>

                   <div></div>
               </div>
        </section>
    )

}

export default CarrinhoPage;