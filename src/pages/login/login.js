import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container'
import { setUser } from '../../infra/local-storage' //--> para salvar no localstorage
import { loginUser } from '../../apis/login.api' //--> importar função do login API

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

   //evento de submissão do formulário

  handleSubmit = (e) => { //salvar informação de login e senha 
    e.preventDefault() //não dar submit antes da hora 
    const inputEmail = this.email.current 
    const inputPassword = this.password.current
    
    const user = {
      email: inputEmail.getValue(),
      password: inputPassword.getValue()
    }

    //------ CHAMADA PARA A API DO LOGIN (19.11)

    //chama a função para conferir o login escrito no browser com o login previsto na API
    loginUser(user) 
      .then((response) => {
          //LOCALSTORAGE - Mini banco de dados do browser
          setUser(user) //seta/salva o user (email e senha) no localStorage 
          this.props.history.push('/') //redireciona para a home //history é um array, e push guarda os históricos e redireciona
          // console.log('hello handleSubmit')
        })
      .catch((error) => {
          console.log(error)
        })

        setUser(user) 
        this.props.history.push('/')
      }

      render() {
        return (
        <Container>
          <Form title='Login' text='Entre com seu Email e Senha' onSubmit={this.handleSubmit}>
              <Form.Label htmlFor='email'>Email:</Form.Label>
              <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton} required></Form.Input>
              <Form.Label>Senha:</Form.Label>
              <Form.Input ref={this.password} type='password' id='passaword' minLength={6} onChange={() => console.log('olá')} required></Form.Input>
              <Form.Button disabled={this.state.disabled} type='submit' className='button'>Enviar</Form.Button>
              <Form.Link href='/signup'>Criar uma conta</Form.Link>
          </Form>
        </Container>
      )}
   }

   export default Login 