import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container'

function Signup() {
  return(
    <Container>
      <Form title='Cadastre-se' text='Preencha os dados com suas informações'>
          <Form.Label htmlFor='name'>Nome</Form.Label>
          <Form.Input id='name' type='text'></Form.Input>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Input id='email' type='email'></Form.Input>
          <Form.Label htmlFor='phone'>Telefone:</Form.Label>
          <Form.Input type='tel' id='phone'></Form.Input>
          <Form.Label htmlFor='passaword'>Senha:</Form.Label>
          <Form.Input type='password' id='passaword'></Form.Input>
          <Form.Button disabled type='submit' className='button'>Enviar</Form.Button>
          <Form.Link href='/login'>Fazer login</Form.Link>
      </Form>
    </Container>
  )
}

export default Signup 