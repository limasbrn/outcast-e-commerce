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
               <div className="flex w-full h-[280px] justify-center">
                   <div className="flex w-4/5 h-full bg-red-400 justify-center">
                       <div className="flex flex-col justify-between items-center w-2/6 h-full bg-gray-200">
                           <div className="flex w-5/6 h-[135px] bg-red-100"></div>
                           <div className="flex w-5/6 h-[135px] bg-red-200"></div>
                       </div>
                       <div className="flex w-2/6 h-full rounded-[5px] justify-center items-center bg-gray-100">
                           <div className="flex flex-col w-5/6 h-5/6 bg-red-300">
                               <h1 className="font-semibold">TOTAL:</h1>
                               <h1 className="font-semibold">R$ 535,00</h1>
                               <span className="text-[#868686] text-[14px]">Esta compra é elegível as regras de FRETE GRÁTIS</span>
                               <div>
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