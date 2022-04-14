import React from 'react' ;
import { Link } from 'react-router-dom';
import Fotoprincipal from "../images/naeim-jafari-unsplash-fotoprincipal(1).jpg"; 
import Destaque1 from "../images/Rectangle1.png";
import Destaque2 from "../images/Rectangle2.png";
import Destaque3 from "../images/Rectangle3.png";
import Banner from "../images/outcast-photo.jpg";

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
             <span className='flex text-sm text-[#868686]'>Saiba mais</span>
          </div>
      </div>

      <div className='flex flex-col w-full h-[580px] justify-center items-center'> 
        <div className='flex w-4/5 h-full flex-col items-center relative'>
          <span className='flex w-1/3 h-auto  items-center justify-center h-[75px] pt-[30px] font-semibold tracking-[35px] mr-[-35px] text-center text-lg'>DESTAQUES</span>
          {/*Aqui por a imagem dos destques*/}
          <div className='flex w-4/5 h-4/5 justify-center '>
            <img className="w-auto h-full mr-[30px]" src={Destaque1}/>
            <img className="w-auto h-full mr-[30px]" src={Destaque2}/>
            <img className="w-auto h-full" src={Destaque3}/>
          </div>
          <div className='flex w-[570px] h-[100px] text-white text-center tracking-[10px] mr-[-10px] pl-[10px] bg-black justify-center items-center absolute bottom-[-15px]'>COMPRE NA OUTCAST E GANHE 50% DE DESCONTO NA 3ª PEÇA</div>
        </div>

        <div className='flex h-[35px] w-3/5 justify-end items-center mt-[30px]'>
             <span className='flex text-sm text-[#868686]'>Saiba mais</span>
          </div>

      </div>

       {/*Aqui a imagem do outcast banner*/}
       <div className="flex m-auto w-[57%] h-auto mt-[50px]"><img className="flex w-full h-auto" src={Banner}/></div>

    </section>
    

   )

}

export default Home;