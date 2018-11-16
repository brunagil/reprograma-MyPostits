import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Components/Form/Button', module)
    .add('default', () =>(
        <Button>Button</Button>    
    ))
    .add('disabled', () =>(
        <Button disabled = 'true'>Disabled Button</Button>    
    ))