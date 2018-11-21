import React from 'react'
import { storiesOf } from '@storybook/react'
import PostIt from './index'

storiesOf('Components/Postit', module) 
    .add('default', () =>(
        <PostIt />
    ))