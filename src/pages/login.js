import React from 'react' ;
import { Link } from 'react-router-dom';
import BlackBtn from '../components/btn-black';
import InputEmail from '../components/email.input';
import InputPassLogin from '../components/password-login';
import GoogleIcon from '../icones/google-button.svg'

const LoginPage=  ( ) => {
    return (
        <section>
                <div className='flex flex-col w-full h-full items-center items-center'>
                        <div className='flex justify-center w-full '>
                            <div className='flex w-4/5 '>
                                <span className='flex font-semibold text-sm text-[#868686] mt-[15px] mb-[30px]'> <Link to="/">Home</Link></span><span className='flex font-normal text-sm text-[#868686] mt-[15px] mb-[30px]'> &gt;  Login</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-full items-center items-center">
                            <h1 className="flex text-[18px] font-semibold tracking-[20px] mr-[-20px] mb-[30px]">LOGIN</h1>
                            <InputEmail/>
                            <InputPassLogin/>
                            <BlackBtn name="ENTRAR"/>
                            <span className="text-sm text-black mb-[15px]">Não possui cadastro?<Link to="/cadastro"><strong>&nbsp; Cadastre-se</strong></Link></span>
                            <span className="text-sm text-black mb-[15px]">Esqueceu sua senha?<strong>&nbsp; Recupere aqui</strong></span>
                            <span className="text-sm text-black mb-[15px]"><strong>ou</strong></span>
                            <button className="flex w-[280px] h-[35px] text-white font-semibold text-[14px] bg-[#868686] rounded-[5px] items-center justify-center"><img className="mr-[10px]
                            " src={GoogleIcon}/>Acesse com sua conta Google</button>
                        </div>
                </div>
        </section>

    
    )
}

export default LoginPage;