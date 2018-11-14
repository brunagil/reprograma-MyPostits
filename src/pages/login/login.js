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
    this.email = React.createRef() //variável 'referencia' (ref) a um componente, que te deixa acessar o erro
    this.password = React.createRef()
  } 

  onDisabledButton = () => { //para retornar e acessar o objeto de error
    //console.log('this.email =>', this.email.current)
    const inputEmail = this.email.current //current para pegar os objetos (próprio do react)
    const inputPassword = this.password.current

    if (inputEmail.hasError() || inputPassword.hasError()){ //se tiver erro em um ou outro
      this.setState({disabled : true}) //não habilita o botão
    } else {
      this.setState({disabled : false}) //habilita o botão
    }

  }
  render() {
    return (
    <Container>
      <Form title='Login' text='Entre com seu Email e Senha'>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton} required></Form.Input>
          <Form.Label>Senha:</Form.Label>
          <Form.Input ref={this.password} type='password' id='passaword' minLength={6} onChange={() => console.log('olá')} required></Form.Input>
          <Form.Button disabled={this.state.disabled} type='submit' className='button'>Enviar</Form.Button>
          <Form.Link href='/signup'>Criar uma conta</Form.Link>
      </Form>
    </Container>
    )
  }
}


export default Login 