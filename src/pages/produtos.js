import React from "react";
import { Link } from "react-router-dom";
import ProductPhoto from "../images/naeim-jafari--VNyN-lZ1pE-unsplash.jpg";
import ShareIcon from "../icones/share-icon.svg";
import HomeLink from "../components/home-link";

const ProductPage = () => {
  return (
    <>
      <HomeLink page="Vitríne" />
      <div className="flex flex-col w-full h-[800px] items-center md:h-[450px] md:flex-wrap ">
        <div className="flex flex-wrap justify-center items-center w-[100%] md:w-3/6">
          <div className="flex w-[80%] h-[420px] ">
            <div className="flex w-[100%] h-auto justify-center items-center lg:justify-end">
              <img className="h-full w-auto" src={ProductPhoto} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center w-[100%] md:w-3/6">
          <div className="flex w-[80%] h-[380px]">
            <div className="flex w-[100%] h-auto justify-center items-center lg:justify-start">
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold mt-[30px] md:mt-[50px]">
                  JAQUETA STARLA PAETÊ
                </h1>
                <span className="font-thin text-sm text-[#868686]">
                  Jaqueta cropped com estampa de estrelas
                </span>
                <span className="font-semibold">R$ 279,00</span>
                <div className="flex w-full h-[30px] mb-[15px] items-center">
                  <div className="flex w-[15px] h-[15px] mr-[10px] border border-black bg-black"></div>
                  <div className="flex w-[15px] h-[15px] border border-black bg-[#7C0101]"></div>
                </div>
                <div className="flex w-full h-[30px] items-center mb-[5px]">
                  <div className="flex w-[135px] h-[30px] border border-[#868686] rounded-[5px] items-center justify-center font-thin text-sm text-[#868686]">
                    Selecione seu tamanho
                  </div>
                </div>
                <span className="font-thin text-sm text-[#868686] mb-[15px]">
                  Tabela de tamanhos
                </span>
                <div className="flex w-full h-[35px] items-center mb-[10px] ">
                  <div className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-[#868686] rounded-[5px] items-center justify-center ">
                    {" "}
                    ADICIONAR AOS FAVORITOS{" "}
                  </div>
                </div>
                <div className="flex w-full h-[35px] items-center mb-[5px]">
                  <div className="flex w-[280px] h-[35px] text-white text-[12px] tracking-[5px] bg-black rounded-[5px] items-center justify-center ">
                    {" "}
                    COMPRAR{" "}
                  </div>
                </div>
                <span className="font-thin text-sm text-[#868686] mb-[15px]">
                  + Detalhes sobre o produto
                </span>
                <div className="flex w-full h-auto">
                  <span className="font-thin text-sm text-[#868686]">
                    Compartilhar
                  </span>
                  <img className="ml-[5px]" src={ShareIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
