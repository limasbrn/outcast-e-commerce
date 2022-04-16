import React from 'react' ;
import HomeLink from '../components/home-link'
import ProductDisplay from '../components/product-wrap'
import Product1 from '../images/golden-dress-two.webp';
import Product2 from '../images/wine-silky-dress-short.webp';
import Product3 from '../images/jumpsuit-black.webp';
import Product4 from '../images/Blazer paête.webp';
import Product5 from '../images/Vestido fitas.webp';
import Product6 from '../images/Vestido fitas.webp';
import Product7 from '../images/Vestido fitas.webp';
import Product8 from '../images/Vestido fitas.webp';
import Product9 from '../images/Vestido fitas.webp';
import Product10 from '../images/Vestido fitas.webp';

const ProductDisplayPage=  ( ) => {
    return (
        <section>
                <HomeLink page='Produtos'/>
                <div className='flex flex-rol w-full h-[450px] justify-center items-center'>
                   <div className='flex w-[80%] h-full bg-red-300 justify-between'>
                       <div className='flex w-[17%] h-[70%] border border-[1px] border-[#DADADA] rounded-[5px] m-[15px]' ></div>
                       <div className='flex flex-col w-[80%] h-full justify-between'>
                            
                            <div className='flex flex-row w-full h-[47%] justify-around pt-[15px] bg-white'>
                                <ProductDisplay foto= {Product4} nome='BLAZER MADDIE' preco='R$ 425,00' />
                                <ProductDisplay foto= {Product1} nome='VESTIDO CLAIRE' preco='R$ 435,00' />
                                <ProductDisplay foto= {Product3} nome='MACACÃO BROOK' preco='R$ 580,00' />
                                <ProductDisplay foto= {Product2} nome='VESTIDO NADIA' preco='R$ 275,00' />
                                <ProductDisplay foto= {Product5} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                            </div>

                            <div className='flex flex-row w-full h-[47%] justify-around pb-[15px] bg-white'>
                                <ProductDisplay foto={Product6} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                                <ProductDisplay foto={Product7} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                                <ProductDisplay foto={Product8} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                                <ProductDisplay foto={Product9} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                                <ProductDisplay foto={Product10} nome='VESTIDO STRIPES' preco='R$ 535,00' />
                            </div>
                            
                       </div>
                   </div>
                  
                </div>
        </section>
    )
}

export default ProductDisplayPage;