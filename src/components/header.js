import React from 'react' ;
import { Link } from 'react-router-dom';
import UserIcon from '../icones/user-icon.svg';
import BagIcon from '../icones/bag-icon.svg';
import HamIcon from '../icones/hamburguer-icon.svg';

const Header =  ( ) => {
    return(

        <div className="flex w-full h-auto flex-col">

            <div className='flex flex-row justify-center items-center w-full h-[35px] bg-black text-white'>
                <div className='flex justify-center items-center w-[80%]  md:flex-row  md:justify-between'>
                    <div className='hidden md:flex md:w-2/4  justify-start text-[12px] sm:text-sm text-white '>Seja do clube outcast e ganhe     <strong> &nbsp; DESCONTO EXCLUSIVO</strong></div>
                    <div className='flex md:w-2/4 justify-center sm:items-center md:justify-end text-[12px] sm:text-sm  text-white'>Em compras a partir de R$ 250,00 ganhe    <strong> &nbsp; FRETE GRÁTIS</strong></div>
                </div>
            </div>
         {/* Menu white */}
            <div className="flex w-full h-[90px] justify-center border-b-[1px] border-[#DADADA]">
               
                <div className='flex w-full md:w-4/5'>

                    <div className='flex w-1/5 justify-center items-center' >
                        <div>
                            <img className=" md:hidden" src={HamIcon}/>
                        </div>
                    </div>
                    
                    <div className='flex flex-row w-3/5 justify-center'>
                        <div className='flex flex-row w-2/5 justify-center items-center '>
                            <div className='flex flex-col items-center h-1/2 w-2/2 '>
                                <p className='flex w-full justify-center h-1/2 font-semibold tracking-[20px]  text-[20px]text-center mr-[-20px]'>OUTCAST</p>
                                <p className='flex w-full justify-center h-1/2 font-semibold tracking-[35px] text-center text-[#868686] mr-[-35px]'>STORE</p>
                            </div>
                        </div>
                    </div>
                   {/*aqui bloco para ícones sacola e user*/}
                    <div className='flex w-1/5 justify-center md:justify-end items-center' >
                        <Link to="/login"><img className="mr-[5px] " src={UserIcon}/></Link>
                        <Link to="/carrinho"><img  className="" src={BagIcon}/></Link>
                    </div>

                </div>

            </div>

            {/* Menu categorias */}
            <div className="hidden md:flex md:h-[30px] md:w-full md:border md:border-[1px] md:border-[#C4C4C4] md:justify-center md:items-center">
                <div className="hidden md:flex md:flex-row md:w-[80%] md:h-full md:items-center">
                <ul className="flex w-full text-[12px]">
                        <li className="flex font-bold"><Link to="/display">NEW</Link></li>
                        <li className="flex ml-[30px] hover:font-bold"><Link to="/display">VESTIDOS</Link></li>
                        <li className="flex ml-[30px] hover:font-bold"><Link to="/display">BLAZERS</Link></li>
                        <li className="flex ml-[30px] hover:font-bold"><Link to="/display">MACAQUINHOS</Link></li>
                        <li className="flex ml-[30px] hover:font-bold"><Link to="/display">SAIAS</Link></li>
                        <li className="flex ml-[30px] hover:font-bold"><Link to="/display">CALÇAS</Link></li>
                        <li className="flex ml-[30px] hover:font-bold font-bold text-[#7c0101]"><Link to="/display">SALES</Link></li>
                </ul>
                </div>

            </div>
            
        </div>
    )

}

export default Header;