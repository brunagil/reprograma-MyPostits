import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Home from './index'
import Navbar from '../../components/navbar'

localStorage.setItem('user', 'teste do storybook')

// const mockPostits = {
//     id: 1,
//     title: 'Hello',
//     text: 'Hello my friend'
// }

storiesOf('Pages/Home', module)
    .addDecorator(StoryRouter())
    .add('default', () =>(
        <React.Fragment>
            <Navbar />
            <Home user='Bruna' />
        </React.Fragment>
    ))
