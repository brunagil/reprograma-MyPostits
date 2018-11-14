import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container'

// function Signup() {
//   return(
//     <Container>
//       <Form title='Cadastre-se' text='Preencha os dados com suas informações'>
//           <Form.Label htmlFor='name'>Nome</Form.Label>
//           <Form.Input id='name' type='text'></Form.Input>
//           <Form.Label htmlFor='email'>Email:</Form.Label>
//           <Form.Input id='email' type='email'></Form.Input>
//           <Form.Label htmlFor='phone'>Telefone:</Form.Label>
//           <Form.Input type='tel' id='phone'></Form.Input>
//           <Form.Label htmlFor='passaword'>Senha:</Form.Label>
//           <Form.Input type='password' id='passaword'></Form.Input>
//           <Form.Button disabled type='submit' className='button'>Enviar</Form.Button>
//           <Form.Link href='/login'>Fazer login</Form.Link>
//       </Form>
//     </Container>
//   )
// }

class Signup extends React.Component {
    constructor() {
      super() 
      this.state= { disabled : true }
      this.name = React.createRef()
      this.email = React.createRef() 
      this.phone = React.createRef()
      this.password = React.createRef()

    }

    onDisabledButton = () => {
      const inputName = this.name.current
      const inputEmail = this.email.current 
      const inputPhone = this.phone.current
      const inputPassword = this.password.current
  
      if (inputName.hasError() 
      || inputEmail.hasError()
      || inputPhone.hasError()
      || inputPassword.hasError()){ 
        
        this.setState({disabled : true}) 
      } else {
        this.setState({disabled : false}) 
      }

    }

    render() { //aqui dentro retorna os componentes a serem renderizados
      return (
        <Container>
        <Form title='Cadastre-se' text='Preencha os dados com suas informações'>
            <Form.Label htmlFor='name'>Nome</Form.Label>
            <Form.Input ref={this.name} id='name' type='text' onChange={this.onDisabledButton} required></Form.Input>

            <Form.Label htmlFor='email'>Email:</Form.Label>
            <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton} required></Form.Input>

            <Form.Label htmlFor='phone'>Telefone:</Form.Label>
            <Form.Input ref={this.phone} type='tel' id='phone' onChange={this.onDisabledButton} minLength={10} ></Form.Input>

            <Form.Label htmlFor='passaword'>Senha:</Form.Label>
            <Form.Input ref={this.password} type='password' id='passaword' onChange={this.onDisabledButton} minLength={6} required></Form.Input>

            <Form.Button disabled={this.state.disabled} type='submit' className='button'>Enviar</Form.Button>

            <Form.Link href='/login'>Fazer login</Form.Link>
        </Form>
      </Container>
    )
  }
}





export default Signup 