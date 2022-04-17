import React from 'react' ;
import HomeLink from '../components/home-link'
import ProductDisplay from '../components/product-wrap'
import Product1 from '../images/golden-dress-two.webp';
import Product2 from '../images/wine-silky-dress-short.webp';
import Product3 from '../images/jumpsuit-black.webp';
import Product4 from '../images/Blazer paête.webp';
import Product5 from '../images/Vestido fitas.webp';
import Product6 from '../images/jumpsuit-paete-black.webp';
import Product7 from '../images/wine-silky-dress.webp';
import Product8 from '../images/jumpsuit-black-two.webp';
import Product9 from '../images/golden-dress.webp';
import Product10 from '../images/jumpsuit-paete-black-two.webp';

const ProductDisplayPage=  ( ) => {
    return (
        <section>
                <HomeLink page='Produtos'/>
                <div className='flex flex-rol w-full h-[450px] justify-center items-center'>
                   <div className='flex w-[80%] h-full justify-between'>
                       <div className='flex flex-col w-[17%] h-[70%] border border-[1px] border-[#DADADA] rounded-[5px] m-[15px]' >
                           <ul className='flex flex-col text-[11px] p-[15px]'>
                               <li className='flex font-bold text-[12px]'>CATEGORIAS</li>
                               <li className='mt-[5px]'>VESTIDOS</li>
                               <li className=''>BLAZERS</li>
                               <li className=''>MACACÕES</li>
                               <li className=''>SAIAS</li>
                               <li className=''>CALÇAS</li>
                           </ul>
                           <ul className='flex flex-col text-[11px] pl-[15px] pr-[15px]'>
                               <li className='flex font-bold text-[12px]'>TAMANHO</li>
                               <li className='mt-[5px]'>PP</li>
                               <li className=''>P</li>
                               <li className=''>M</li>
                               <li className=''>G</li>
                               <li className=''>GG</li>
                           </ul>
                       </div>
                       <div className='flex flex-col w-[80%] h-full justify-between'>
                            
                            <div className='flex flex-row w-full h-[47%] justify-around pt-[15px] bg-white'>
                                <ProductDisplay foto= {Product4} nome='BLAZER MADDIE' preco='R$ 425,00' />
                                <ProductDisplay foto= {Product1} nome='VESTIDO CLAIRE' preco='R$ 435,00' />
                                <ProductDisplay foto= {Product3} nome='MACACÃO BROOK' preco='R$ 580,00' />
                                <ProductDisplay foto= {Product2} nome='VESTIDO NADIA' preco='R$ 275,00' />
                                <ProductDisplay foto= {Product5} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                            </div>

                            <div className='flex flex-row w-full h-[47%] justify-around pb-[15px] bg-white'>
                                <ProductDisplay foto={Product6} nome='MACACÃO MARGÔ' preco='R$ 675,00' />
                                <ProductDisplay foto={Product7} nome='VESTIDO VERÔNICA' preco='R$ 317,00' />
                                <ProductDisplay foto={Product8} nome='MACACÃO ANN' preco='R$ 469,00' />
                                <ProductDisplay foto={Product9} nome='VESTIDO ELÍS' preco='R$ 615,00' />
                                <ProductDisplay foto={Product10} nome='MACACÃO ELEONOR' preco='R$ 635,00' />
                            </div>
                            
                       </div>
                   </div>
                  
                </div>
        </section>
    )
}

export default ProductDisplayPage;