import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container'

function Login() {
  return(
    <Container>
      <Form title='Login' text='Entre com seu Email e Senha'>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Input id='email' type='text'></Form.Input>
          <Form.Label>Senha:</Form.Label>
          <Form.Input type='password' id='passaword'></Form.Input>
          <Form.Button disabled type='submit' className='button'>Enviar</Form.Button>
          <Form.Link>Criar uma conta</Form.Link>
      </Form>
    </Container>
  )
}

export default Login 