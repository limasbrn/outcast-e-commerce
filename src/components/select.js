import React from 'react' ;

function SelectDisplay(props) {
    return(
        <>
            <select name="select" className='w-[170px] border border-[1px] border-[#DADADA] m-[5px] rounded-[5px] hover:border-black'>
                <option value="valor1" selected>Mais populares</option>
                <option value="valor1">Novidades</option>
                <option value="valor2">Menor preço</option>
                <option value="valor3">Maior preço</option>
                
            </select>
        </>
    )

}

export default SelectDisplay;