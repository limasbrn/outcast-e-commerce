import React from "react";
import { Link } from 'react-router-dom';

function ModalMenu(props) {
  const { state, handleActive } = props;

  return (
        state && ( 
    <section className="absolute top-[125px] left-[0px] flex md:hidden h-[200px] w-full sm:w-[640px] bg-white items-center rounded-[5px] border-[#DADADA] border-[1px] justify-center self-center">
        
        <div className="flex w-[90%] h-[90%] justify-center items-center">
            <ul className="text-md">
                <li className="font-bold self-center" onClick={handleActive}>NEW</li>
                <Link to="/display"><li className="hover:font-bold self-center" onClick={handleActive}>VESTIDOS</li></Link>
                <Link to="/display"><li className="hover:font-bold self-center" onClick={handleActive}>BLAZERS</li></Link>
                <Link to="/display"><li className="hover:font-bold self-center" onClick={handleActive}>MACAQUINHOS</li></Link>
                <Link to="/display"><li className="hover:font-bold self-center" onClick={handleActive}>SAIAS</li></Link>
                <Link to="/display"><li className="hover:font-bold self-center" onClick={handleActive}>CALÇAS</li></Link>
                <li className="font-bold text-[#7c0101] self-center" onClick={handleActive} >SALES</li>
            </ul>
        </div>

    </section>
      
       
      ) 
  );
}

export default ModalMenu;
