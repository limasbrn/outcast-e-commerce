import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/login';
import ProductPage from './pages/produtos';
import CarrinhoPage from './pages/carrinho';
import CadastroPage from './pages/cadastro';

const MainRoutes = ( ) => {
         return(
             <Routes >
                 <Route 
                 path="/" 
                 element={<Home/>}
                 />
                 <Route 
                 path="/login" 
                 element={<LoginPage/>}
                 />
                 <Route 
                 path="/produtos" 
                 element={<ProductPage/>}
                 />
                 <Route 
                 path="/carrinho" 
                 element={<CarrinhoPage/>}
                 />
                 <Route 
                 path="/cadastro" 
                 element={<CadastroPage/>}
                 />
             </Routes>  
               )
}

export default MainRoutes;