import React from 'react' ;
import { Link } from 'react-router-dom';

/* import Fotoprincipal from "../public/imagens/imagens/naeim-jafari-unsplash-fotoprincipal.jpg"; */

const Home =  ( ) => {
   return(
    <section>

      <div className='flex flex-col w-full items-center'>
          <div className='flex justify-center w-full '>
             <div className='flex w-4/5 bg-gray-800'>
               <span className='flex font-semibold text-sm text-[#868686] mb-[30px]'> Home</span>
             </div>
          </div>

            {/*div da imagem principal*/}
          <div className='flex justify-center items-center  w-4/5 h-[420px] bg-red-400'>
            <div className="flex w-3/5 h-full bg-gray-800"> <Link to="/produtos">produtos</Link></div>
          </div>

           
          <div className='flex h-[35px] w-3/5 bg-gray-800 justify-end items-center'>
             <span className='flex text-sm text-[#868686]'>Saiba mais</span>
          </div>
      </div>

      <div className='flex flex-col w-full h-[580px] justify-center items-center'> 
        <div className='flex w-4/5 h-full flex-col items-center bg-red-400 relative'>
          <span className='flex w-1/3 h-auto bg-red-400 items-center justify-center h-[75px] pt-[30px] font-semibold tracking-[35px] mr-[-35px] text-center text-lg'>DESTAQUES</span>
          {/*Aqui por a imagem dos destques*/}
          <div className='flex w-4/5 h-4/5 bg-red-600'></div>
          <div className='flex w-[570px] h-[100px] text-white text-center tracking-[10px] mr-[-10px] pl-[10px] bg-black justify-center items-center absolute bottom-[-15px]'>COMPRE NA OUTCAST E GANHE 50% DE DESCONTO NA 3ª PEÇA</div>
        </div>

        <div className='flex h-[35px] w-3/5 bg-gray-800 justify-end items-center'>
          <span className='flex text-sm text-[#868686]'>Saiba mais</span>
        </div>

      </div>

       {/*Aqui a imagem do outcast banner*/}
       <div className='flex w-full h-[450px] bg-red-400'></div>

    </section>
    

   )

}

export default Home;