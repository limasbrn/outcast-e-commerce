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
                           <div className="flex w-5/6 h-[135px] bg-red-100"></div>
                           <div className="flex w-5/6 h-[135px] bg-red-200"></div>
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