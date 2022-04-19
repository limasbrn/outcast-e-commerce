import React, { useState } from 'react';
import PageTitle from '../components/page-title';
import HomeLink from '../components/home-link'
import BigInputCad from '../components/big-input-cad'
import LittleInputCad from '../components/little-input-cad'
import BlackBtn from '../components/btn-black';
import SelectType from '../components/select-type-home';
import InputPass from '../components/password.input';
import InputCity from '../components/input-city';
import CheckboxCad from '../components/checkbox.js';
import ModalCad from '../components/modal-cad';



function CadastroPage( ){

    const [isClose, setClose] = useState(false)

    const handleCloseMod = () =>{
        setClose((state) => !state)
    }

    return (
        <section>
                <HomeLink page='Cadastro'/>
                <div className='flex flex-col w-full h-[800px] md:h-[500px] flex justify-center items-center'>

                    <PageTitle h1='CADASTRO'/>  

                    <div className="flex flex-col w-[80%] h-full md:flex-wrap md:items-center ">
                        <div className="flex flex-col w-full md:w-[40%]">
                            <BigInputCad h3='Nome'/> 
                            <BigInputCad h3='Sobrenome'/>
                            <div className='flex w-[100%] flex-row justify-between h-[60px]'>
                                <LittleInputCad h3='Celular'/>
                                <LittleInputCad h3='Outro (opcional)'/>
                            </div>
                            <InputCity/>
                            <SelectType/>
                            <BigInputCad h3='Endereço'/> 
                            <BigInputCad h3='Bairro'/> 
                            <BigInputCad h3='Ponto de referência'/> 
                        </div>
                        
                        <div className="flex flex-col w-full md:w-[40%]">
                            <BigInputCad h3='E-mail'/> 
                            <InputPass h3='Senha'/>
                            <InputPass h3='Confirme sua senha'/>
                            <div className="flex font-normal items-center text-[12px] mt-[5px] mb-[15px]"><CheckboxCad text="&#32; Desejo receber notificações e novidades por e-mail"/></div>
                           
                            <div className="flex self-center">
                            <BlackBtn onClick={handleCloseMod} name='CONFIRMAR CADASTRO'/>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <ModalCad state={isClose}/>
        </section>

    
    )
}

export default CadastroPage;