import React from 'react'
import './Link.css'

function Link(props) {
    return (
        <a id={props.id} href={props.href} className="link">{props.children}</a>
    )
}

export default Link 