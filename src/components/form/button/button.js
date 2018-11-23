import React from 'react'
import './button.css'

function Button(props) {
    let classes = 'button'

    if(props.disabled) { //se o button conter a classe 'disabled'
        classes += ' button--disabled' //muda o estilo 
    }

    return (
       <button disabled = {props.disabled} className={classes}>
            {props.children}
       </button>
    )  //disabled = true 
}
export default Button 
