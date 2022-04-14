import React from 'react' ;
import { Link } from 'react-router-dom';
import UserIcon from '../icones/user-icon.svg';
import BagIcon from '../icones/bag-icon.svg';
import HamIcon from '../icones/hamburguer-icon.svg';

const Header =  ( ) => {
    return(

        <div className="flex w-full h-auto flex-col">

            <div className='flex flex-row justify-center items-center w-full h-9 bg-black text-white'>
                <div className='flex w-[80%] justify-between'>
                    <div className='flex w-2/4  justify-start text-sm text-white'>Seja do clube outcast e ganhe     <strong> &nbsp; DESCONTO EXCLUSIVO</strong></div>
                    <div className='flex w-2/4 justify-end text-sm text-white'>Em compras a partir de R$ 250,00 ganhe    <strong> &nbsp; FRETE GRÁTIS</strong></div>
                </div>
            </div>
         {/* Menu white */}
            <div className="flex w-full h-[90px] justify-center shadow-[#868686] shadow-[0_10px_10px_-15px_rgba(0,0,0,0.275)]">
               
                <div className='flex w-4/5'>

                    <div className='flex w-1/12 justify-left items-center' >
                        <div>
                            <img className="hidden" src={HamIcon}/>
                        </div>
                    </div>
                    
                    <div className='flex flex-row w-10/12 justify-center'>
                        <div className='flex flex-row w-2/5 justify-center items-center '>
                            <div className='flex flex-col items-center h-1/2 w-2/2 '>
                                <p className='flex w-full justify-center h-1/2 font-semibold tracking-[20px]  text-[20px]text-center mr-[-20px]'>OUTCAST</p>
                                <p className='flex w-full justify-center h-1/2 font-semibold tracking-[35px] text-center text-[#868686] mr-[-35px]'>STORE</p>
                            </div>
                        </div>
                    </div>
                   {/*aqui bloco para ícones sacola e user*/}
                    <div className='flex w-1/12 justify-end items-center' >
                        <Link to="/login"><img className=" mr-[15px]" src={UserIcon}/></Link>
                        <Link to="/carrinho"><img  className="" src={BagIcon}/></Link>
                    </div>

                </div>

            </div>

            {/* Menu categorias */}
            <div className="flex h-[30px] w-full justify-center border border-[1px] border-[#C4C4C4]">
                <div className="flex flex-row w-[80%] h-full">
                    <ul className="flex w-full text-[12px] items-center">
                        <li className="flex font-bold">NEW</li>
                        <li className="flex ml-[30px]">VESTIDOS</li>
                        <li className="flex ml-[30px]">BLAZERS</li>
                        <li className="flex ml-[30px]">MACAQUINHOS</li>
                        <li className="flex ml-[30px]">SAIAS</li>
                        <li className="flex ml-[30px]">CALÇAS</li>
                        <li className="flex ml-[30px] font-bold text-[#7c0101]">SALES</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )

}

export default Header;