import React from 'react' ;
import Destaque1 from "../images/Rectangle1.png";
import Destaque2 from "../images/Rectangle2.png";
import Destaque3 from "../images/Rectangle3.png";

function Destaques(props) {
    return(
        <>
            <div className='flex w-4/5 h-full flex-col items-center relative'>
                <span className='flex w-1/3 h-auto  items-center justify-center h-[75px] pt-[30px] font-semibold tracking-[35px]    mr-[-35px] text-center text-lg'>DESTAQUES</span>
                {/*Aqui por a imagem dos destques*/}
                <div className='flex w-4/5 h-4/5 justify-center '>
                <img className="w-auto h-full mr-[30px]" src={Destaque1}/>
                <img className="w-auto h-full mr-[30px]" src={Destaque2}/>
                <img className="w-auto h-full" src={Destaque3}/>
                </div>
                <div className='flex w-[570px] h-[100px] text-white text-center tracking-[10px] mr-[-10px] pl-[10px] bg-black justify-center items-center absolute bottom-[-15px]'>COMPRE NA OUTCAST E GANHE 50% DE DESCONTO NA 3ª PEÇA</div>
            </div>
      </>
    )

}

export default Destaques; 