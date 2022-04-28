import React from 'react' ;
import Product1 from '../images/golden-dress-two.webp';
import Product2 from '../images/wine-silky-dress-short.webp';
import Product3 from '../images/jumpsuit-black.webp';
import Product4 from '../images/Blazer paête.webp';
import Product5 from '../images/Vestido fitas.webp';
import ProductDisplay from '../components/product-wrap'
import { Link } from 'react-router-dom';


const ProducDisplay =  ( ) => {
    return(
        <>
            <div className="flex flex-col justify-center items-center w-full h-auto mt-[30px]">
                <div className="flex w-[80%] h-[20%]">
                    <h2 className="flex flex-col justify-center items-center font-semibold">Destaques do momento</h2>
                </div>
                <div className="hidden md:flex md:w-[80%] md:h-[80%] bg-white justify-between mt-[15px]">
                    <ProductDisplay foto= {Product4} nome='BLAZER MADDIE' preco='R$ 425,00' />
                    <ProductDisplay foto= {Product1} nome='VESTIDO CLAIRE' preco='R$ 435,00' />
                    <ProductDisplay foto= {Product3} nome='MACACÃO BROOK' preco='R$ 580,00' />
                    <ProductDisplay foto= {Product2} nome='VESTIDO NADIA' preco='R$ 275,00' />
                    <ProductDisplay foto= {Product5} nome='VESTIDO STRIPES' preco='R$ 535,00'/>
                </div>
                <div className="flex flex-wrap md:hidden w-full h-auto bg-white justify-around mt-[15px]">
                    <ProductDisplay foto= {Product4} nome='BLAZER MADDIE' preco='R$ 425,00' />
                    <ProductDisplay foto= {Product1} nome='VESTIDO CLAIRE' preco='R$ 435,00' />
                    <ProductDisplay foto= {Product3} nome='MACACÃO BROOK' preco='R$ 580,00' />
                    <ProductDisplay foto= {Product5} nome='VESTIDO STRIPES' preco='R$ 535,00'/>
                </div>
                
                <div className="flex  justify-end w-[80%] h-[20%]">
                <Link to="/display"><h2 className="flex flex-col justify-center text-sm text-[#868686] mt-[30px]">ver mais&gt;&gt;</h2></Link>
                </div>
            </div>
        </>

    
        )
}
    
export default ProducDisplay;