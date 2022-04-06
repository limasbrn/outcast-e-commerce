import React from 'react' ;


function CheckboxCad(props) {
    return(
        <>
           <div>
                <input type = "checkbox" id = "Notificação" value = "Notificação" checked>{props.text}</input>
            </ div>
        </>
    )
     
}

export default CheckboxCad;  