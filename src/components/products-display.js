import React from 'react' ;
import HeartIcon from '../icones/icons_heart.svg';
import Product1 from '../images/golden-dress-two.webp';
import Product2 from '../images/wine-silky-dress-short.webp';
import Product3 from '../images/jumpsuit-black.webp';
import Product4 from '../images/Blazer paête.webp';
import Product5 from '../images/Vestido fitas.webp';


const ProducDisplay =  ( ) => {
    return(
        <>
            <div className="flex flex-col justify-center items-center w-full h-[300px] bg-red-100">
                <div className="flex w-[80%] h-[20%] bg-red-200">
                    <h2 className="flex flex-col justify-center items-center font-semibold">Destaques do momento</h2>
                </div>
                <div className="flex w-[80%] h-[80%] bg-white justify-between">
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#101010]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[80%] border border-[1px] border-[#101010] justify-center"><img className="flex w-auto h-[110px]" src={Product1}/></div>
                        <span className="flex text-[13px] font-bold">VESTIDO CLAIRE</span>
                        <span className="flex text-sm font-semibold">R$ 435,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#101010]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] border border-[1px] border-[#101010] justify-center"><img className="flex w-auto h-[110px]" src={Product2}/></div>
                        <span className="flex text-[13px] font-bold">VESTIDO NADIA</span>
                        <span className="flex text-sm font-semibold">R$ 275,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#101010]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] border border-[1px] border-[#101010] justify-center"><img className="flex w-auto h-[110px]" src={Product3}/></div>
                        <span className="flex text-[13px] font-bold">MACACÃO BROOK</span>
                        <span className="flex text-sm font-semibold">R$ 580,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#101010]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] border border-[1px] border-[#101010] justify-center"><img className="flex w-auto h-[110px]" src={Product4}/></div>
                        <span className="flex text-[13px] font-bold">BLAZER MADDIE</span>
                        <span className="flex text-sm font-semibold">R$ 425,00</span>
                    </div>
                    <div className="flex flex-col w-[15%] h-full border  border-[1px] border-[#101010]">
                        <div className="flex justify-end p-[5px]">
                            <img className="w-[17px] h-auto" src={HeartIcon}/>
                        </div>
                        <div className="flex w-full h-[70%] border border-[1px] border-[#101010] justify-center"><img className="flex w-auto h-[110px]" src={Product5}/></div>
                        <span className="flex text-[13px] font-bold">VESTIDO STRIPES</span>
                        <span className="flex text-sm font-semibold">R$ 535,00</span>
                    </div>
                </div>
                
                <div className="flex  justify-end w-[80%] h-[20%] bg-red-200">
                    <h2 className="flex flex-col justify-center text-sm text-[#868686]">ver mais&gt;&gt;</h2>
                </div>
            </div>
        </>

    
        )
}
    
export default ProducDisplay;