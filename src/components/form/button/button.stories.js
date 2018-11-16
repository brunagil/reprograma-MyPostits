import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Components/Form/Button', module)
    .add('default', () =>(
        <Button>Button</Button>    //não manda nenhuma props// botão habilitado
    ))
    .add('disabled', () =>(
        <Button disabled>Disabled Button</Button>    //se ele tiver a props 'disabled', isso quer dizer que por padrão ele já é true. 
        //quando ele não tem a classe, automaticamente ele assume ser false (botão habilitado)
    ))