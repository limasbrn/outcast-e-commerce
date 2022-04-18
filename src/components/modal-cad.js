import React, { useState } from 'react'

function ModalCad(props) {
    const {state} = props

    const [isOpen, setOpen] = useState(state)

    const handleActive = () =>{
        setOpen((state) => !state)
    }

    return(
        <div hidden={!isOpen} className="flex absolute top-0 left-0 h-[180%] w-[100%] bg-black/25 justify-center items-center">
            <div className="flex h-[270px] w-[350px] bg-white justify-center items-center rounded-[5px]">
                <div className="flex flex-col h-[90%] w-[90%] justify-center items-center">
                    <h1 className="flex font-bold mb-[30px]">OLÁ!</h1>
                    <span className="text-center">Seu cadastro está quase completo. Realize a verificação do seu e-mail e finalize o seu cadastro e seu login será realizado </span>
                    <button className="mt-[30px] flex w-[70px] h-[35px] bg-black text-white justify-center items-center text-[12px] rounded-[5px]" onClick={handleActive} >O K</button>
                </div>
            </div>
        </div>
        
    )

}

export default ModalCad;