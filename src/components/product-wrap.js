import React from 'react' ;
import HeartIcon from '../icones/icons_heart.svg';

function ProductWrap(props) {
    const foto = props.foto;
    const nome = props.nome;
    const preco = props.preco; 
    
    return(
            <div className="flex flex-col w-[18%] h-full border  border-[1px] border-[#DADADA] rounded-[5px]">
                <div className="flex justify-end p-[5px]">
                    <img className="w-[17px] h-auto" src={HeartIcon}/>
                </div>
                <img className="flex w-[70%] h-auto self-center" src={foto}/>
                <span className="flex text-[13px] font-bold pl-[5px]">{nome}</span>
                <span className="flex text-sm font-semibold pl-[5px]">{preco}</span>
            </div>
    )
    
}

export default ProductWrap;