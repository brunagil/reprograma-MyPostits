import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'
import './Link.css'

function Link(props) {
    return (
        <LinkRouter id={props.id} className="link" to={props.href}>
            {props.children} 
        </LinkRouter>
    )
}

export default Link 