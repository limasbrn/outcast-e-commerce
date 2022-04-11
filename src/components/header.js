import React from 'react' ;
import { Link } from 'react-router-dom';
import UserIcon from '../icones/user-icon.svg';
import BagIcon from '../icones/bag-icon.svg';
import HamIcon from '../icones/hamburguer-icon.svg';

const Header =  ( ) => {
    return(

        <div className="flex w-full h-auto flex-col">

            <div className='flex flex-row justify-center items-center w-full h-9 bg-black text-white'>
                <div className='flex w-4/5 justify-between'>
                    <div className='flex w-2/4 bg-gray-800 justify-start text-sm text-white'>Seja do clube outcast e ganhe     <strong>    DESCONTO EXCLUSIVO</strong></div>
                    <div className='flex w-2/4 bg-gray-800 justify-end text-sm text-white'>Em compras a partir de R$ 250,00 ganhe    <strong>  FRETE GRÁTIS</strong></div>
                </div>
            </div>

            <div className="flex w-full h-28 justify-center shadow-[#868686] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.275)]">
               
                <div className='flex w-4/5'>

                    <div className='flex w-1/12 justify-center items-center' >
                        <div>
                            <img className="" src={HamIcon}/>
                        </div>
                    </div>
                    
                    <div className='flex flex-row w-10/12 justify-center'>
                        <div className='flex flex-row w-2/5 justify-center items-center '>
                            <div className='flex flex-col items-center h-1/2 w-2/2 '>
                                <p className='flex w-full justify-center h-1/2 font-semibold tracking-[20px] text-center mr-[-20px]'>OUTCAST</p>
                                <p className='flex w-full justify-center h-1/2 font-semibold tracking-[35px] text-center text-[#868686] mr-[-35px]'>STORE</p>
                            </div>
                        </div>
                    </div>
                   {/*aqui bloco para ícones sacola e user*/}
                    <div className='flex w-1/12 justify-end items-center' >
                        <Link to="/login"><img className="mr-[15px]" src={UserIcon}/></Link>
                        <Link to="/carrinho"><img className="mr-[15px]" src={BagIcon}/></Link>
                    </div>

                </div>

            </div>
            
        </div>
    )

}

export default Header;