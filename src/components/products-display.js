import React from 'react' ;
import HeartIcon from '../icones/icons_heart.svg';
import Product1 from '../images/golden-dress-two.webp';
import Product2 from '../images/wine-silky-dress-short.webp';
import Product3 from '../images/jumpsuit-black.webp';
import Product4 from '../images/Blazer paête.webp';
import Product5 from '../images/Vestido fitas.webp';
import { Link } from 'react-router-dom';


const ProducDisplay =  ( ) => {
    return(
        <>
            <div className="flex flex-col justify-center items-center w-full h-[300px] ">
                <div className="flex w-[80%] h-[20%]">
                    <h2 className="flex flex-col justify-center items-center font-semibold">Destaques do momento</h2>
                </div>
                <div className="flex w-[80%] h-[80%] bg-white justify-between">
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#DADADA] rounded-[5px]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] justify-center"><img className="flex w-auto h-[110px]" src={Product4}/></div>
                        <span className="flex text-[13px] font-bold pl-[5px]">BLAZER MADDIE</span>
                        <span className="flex text-sm font-semibold pl-[5px]">R$ 425,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#DADADA] rounded-[5px]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[80%] justify-center"><img className="flex w-auto h-[110px]" src={Product1}/></div>
                        <span className="flex text-[13px] font-bold pl-[5px]">VESTIDO CLAIRE</span>
                        <span className="flex text-sm font-semibold pl-[5px]">R$ 435,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#DADADA] rounded-[5px]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] justify-center"><img className="flex w-auto h-[110px]" src={Product3}/></div>
                        <span className="flex text-[13px] font-bold pl-[5px]">MACACÃO BROOK</span>
                        <span className="flex text-sm font-semibold pl-[5px]">R$ 580,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#DADADA] rounded-[5px]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] justify-center"><img className="flex w-auto h-[110px]" src={Product2}/></div>
                        <span className="flex text-[13px] font-bold pl-[5px]">VESTIDO NADIA</span>
                        <span className="flex text-sm font-semibold pl-[5px]">R$ 275,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#DADADA] rounded-[5px]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] justify-center"><img className="flex w-auto h-[110px]" src={Product5}/></div>
                        <span className="flex text-[13px] font-bold pl-[5px]">VESTIDO STRIPES</span>
                        <span className="flex text-sm font-semibold pl-[5px]">R$ 535,00</span>
                    </div>
                </div>
                
                <div className="flex  justify-end w-[80%] h-[20%]">
                <Link to="/display"><h2 className="flex flex-col justify-center text-sm text-[#868686] mt-[30px]">ver mais&gt;&gt;</h2></Link>
                </div>
            </div>
        </>

    
        )
}
    
export default ProducDisplay;