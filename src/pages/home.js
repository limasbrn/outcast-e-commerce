import React from 'react' ;
import { Link } from 'react-router-dom';
import Fotoprincipal from "../images/hummingbird.jpg"; 
import Destaque1 from "../images/Rectangle1.png";
import Destaque2 from "../images/Rectangle2.png";
import Destaque3 from "../images/Rectangle3.png";
import Banner from "../images/outcast-photo.jpg";
import ProducDisplay from "../components/products-display";
import AnunFrete from "../images/anuncio-frete.svg";
import AnunSale from "../images/anuncio-sale.svg";

const Home =  ( ) => {
   return(
    <section>

      <div className='flex flex-col w-full items-center'>
          <div className='flex justify-center w-full '>
            {/*  <div className='flex w-4/5'>
               <span className='flex font-semibold text-sm text-[#868686] mt-[15px] mb-[30px]'> Home</span>
             </div> */}
          </div>

            {/*div da imagem principal*/}
          <div className='flex justify-center items-center  w-4/5 h-[420px] mt-[30px]'>
            <div className="flex w-3/5 h-full justify-center "> <Link to="/produtos"><img className="flex h-full w-auto" src={Fotoprincipal}/></Link></div>
          </div>

           
          <div className='flex h-[35px] w-3/5 justify-end items-center'>
         <span className='flex text-sm text-[#868686] mt-[30px]'> Confira &gt;&gt; </span>
          </div>
      </div>

      <ProducDisplay/>

      <div className='flex flex-col w-full h-[300px] justify-center items-center mt-[30px]'> 
          <div className='flex w-full h-[300px] justify-center'>
             <img className="flex w-[40%] h-auto " src={AnunFrete}/>
             <img className="flex w-[40%] h-auto " src={AnunSale}/>
          </div>
      </div>

    </section>
    

   )

}

export default Home;