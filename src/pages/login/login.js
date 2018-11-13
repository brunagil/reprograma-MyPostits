import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container'

// function Login() {
//   return(
//     <Container>
//       <Form title='Login' text='Entre com seu Email e Senha'>
//           <Form.Label htmlFor='email'>Email:</Form.Label>
//           <Form.Input id='email' type='email' required></Form.Input>
//           <Form.Label>Senha:</Form.Label>
//           <Form.Input type='password' id='passaword' minLength={6} required></Form.Input>
//           <Form.Button disabled type='submit' className='button'>Enviar</Form.Button>
//           <Form.Link>Criar uma conta</Form.Link>
//       </Form>
//     </Container>
//   )
// }

class Login extends React.Component {
  constructor(){
    super() 
    this.state= { disabled : true}
  } 
  onDisabledButton = () => {
    console.log(this.onDisabledButton, 'onDisabledButton')

  }
  render() {
    return (
    <Container>
      <Form title='Login' text='Entre com seu Email e Senha'>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Input id='email' type='email' onChange={this.onDisabledButton} required></Form.Input>
          <Form.Label>Senha:</Form.Label>
          <Form.Input type='password' id='passaword' minLength={6} onChange={() => console.log('olá')} required></Form.Input>
          <Form.Button disabled={this.state.disabled} type='submit' className='button'>Enviar</Form.Button>
          <Form.Link>Criar uma conta</Form.Link>
      </Form>
    </Container>
    )
  }
}


export default Login 