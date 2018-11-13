import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/form';

import * as serviceWorker from './serviceWorker';

const component = 
<Form title='Login' text='Entre com seu Email e Senha'>
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Input id='email' type='text'></Form.Input>
        <Form.Label>Senha:</Form.Label>
        <Form.Input type='password' id='passaword'></Form.Input>
        <Form.Button disabled type='submit' className='button'>Enviar</Form.Button>
        <Form.Link>Criar uma conta</Form.Link>
</Form>

ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
