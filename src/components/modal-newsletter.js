import React, { useState } from "react";

function ModalNews(props) {
  const { state, handleActive } = props;

  return (
    state && (
      <div className="flex absolute bottom-[10px] left-0 h-[100%] w-[100%] justify-center items-center">
        <div className="flex h-[250px] w-[350px] bg-white justify-center items-center rounded-[5px] border-[#DADADA] border-[1px] ">
          <div className="flex flex-col h-[90%] w-[90%] justify-center items-center">
            {/* <h1 className="flex font-bold mb-[30px]">
             </h1> */}
            <span className="text-center">
            Sua incrição foi realizada com sucesso! A partir de agora você receberá novidades sobre nossos produtos em primeira mão.
            </span>
            <button
              className="mt-[30px] flex w-[70px] h-[35px] bg-black text-white justify-center items-center text-[12px] rounded-[5px]"
              onClick={handleActive}
            >
              O K
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalNews;
