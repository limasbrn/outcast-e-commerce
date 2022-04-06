import React from 'react' ;

function PageTitle(props) {
    return(
        <>
           <h1 className="flex justify-center items-center text-[18px] font-semibold tracking-[20px] mr-[-20px] mb-[30px]">{props.h1}</h1>
        </>
    )

}

export default PageTitle;