import React, { useState } from 'react' ;
import HeartIcon from '../icones/icons_heart.svg';
import HeartIconTwo from '../icones/heart-black.svg'

function ProductWrap(props) {
    const {foto, nome, preco} = props;

    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite =  (event) => {
        /* isFavorite ? setIsFavorite(false) : setIsFavorite(true) */

        setIsFavorite((state) => !state)
    }

    return(
            <div className="flex flex-col w-[170px] h-[230px] border  border-[1px] border-[#DADADA] m-[5px] rounded-[5px] hover:border-black">
                <div className="flex justify-end p-[5px]">
                    <img id="heartIcon" className="w-[17px] h-auto cursor-pointer" src={isFavorite ? HeartIconTwo : HeartIcon} onClick={handleFavorite}/>
                </div>
                <img className="flex w-[70%] h-auto self-center" src={foto}/>
                <span className="flex text-[13px] font-bold pl-[5px]">{nome}</span>
                <span className="flex text-sm font-semibold pl-[5px]">{preco}</span>
            </div>
    )
    
}

export default ProductWrap;