import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import './Alert.css'

function Alert(props) {
    return(
        <Dialog open={props.open}>
            <DialogTitle>{props.children}</DialogTitle>
            <Button onClick={props.close}>Ok</Button> 
        </Dialog>
    )
}

export default Alert

//pros.nome-da-função => quando a mudança de estado é feita apenas por características passadas na função
