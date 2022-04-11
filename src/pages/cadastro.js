import React from 'react' ;
import PageTitle from '../components/page-title';
import HomeLink from '../components/home-link'
import BigInputCad from '../components/big-input-cad'
import LittleInputCad from '../components/little-input-cad'
import BlackBtn from '../components/btn-black';
import SelectType from '../components/select-type-home';
import InputPass from '../components/password.input';
import InputCity from '../components/input-city';



const CadastroPage=  ( ) => {
    return (
        <section>
                <HomeLink page='Cadastro'/>
                <div className='flex flex-col w-full h-full flex justify-center items-center'>
                    <PageTitle h1='CADASTRO'/>  
                    <div className='flex justify-around items-center  w-4/6 h-[420px] '>
                        <div className='flex flex-col w-2/6 h-full' >
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
                        <div className='flex flex-col w-2/6 h-full' >
                            <BigInputCad h3='E-mail'/> 
                            <InputPass h3='Senha'/>
                            <InputPass h3='Confirme sua senha'/>
                           
                            <div className="flex self-center">
                            <BlackBtn  name='CONFIRMAR CADASTRO'/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    
    )
}

export default CadastroPage;