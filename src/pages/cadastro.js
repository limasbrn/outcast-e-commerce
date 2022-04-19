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
                <div className='flex flex-col w-full h-full flex justify-center items-center'>
                    <PageTitle h1='CADASTRO'/>  
                    <div className='flex flex-col justify-center md:flex-row lg:justify-around items-center w-4/6 h-auto lg:h-[420px]'>
                        <div className='flex flex-col w-full sm:w-[80%] md:w-[80%] h-full p-[15px]' >
                            <BigInputCad h3='Nome'/> 
                            <BigInputCad h3='Sobrenome'/> 
                            <div className='flex w-[300px] flex-row justify-between h-[60px]'>
                                <LittleInputCad h3='Celular'/>
                                <LittleInputCad h3='Outro (opcional)'/>
                            </div>
                            <InputCity/>
                            <SelectType/>
                            <BigInputCad h3='Endereço'/> 
                            <BigInputCad h3='Bairro'/> 
                            <BigInputCad h3='Ponto de referência'/> 
                        </div>
                        <div className='flex flex-col w-full sm:w-[80%] md:w-[80%] h-full p-[15px]' >
                            <BigInputCad h3='E-mail'/> 
                            <InputPass h3='Senha'/>
                            <InputPass h3='Confirme sua senha'/>
                            <div className="flex font-normal items-center text-[12px] mt-[5px] mb-[15px]"><CheckboxCad text="Desejo receber notificações e novidades por e-mail"/></div>
                           
                            <div className="flex w-full justify-center self-center">
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