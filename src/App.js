import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Navbar from './components/navbar'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Alert from './components/Alert'
import PageNotFound from './pages/pageNotFound'
import { startServer } from './infra/api-config'


//construtor é utilizado apenas para definir variáveis e states 
// (estados de componentes)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      openAlert : false,  //alerta inicial é falso pois erro (ainda) não aparece na tela 
      childrenAlert : ''  //não há mensagem de erro
    }
  }


  showAlert = (message) => {
    this.setState({
      openAlert : true,
      childrenAlert : message
    })
  }

  //é o APP.JS que manda como funciona o closeAlert

  closeAlert = () => {
    this.setState({
      openAlert : false
    })
  }

  sucessAlert = () => {
    this.setState({

    })
  }

  //history --> redireciona para a página ou local desejado
  //open é true ou false, variável
  //o close é um item funcional e só recebe props


  //request para API e requisições, colocar tudo no DidMount
  componentDidMount() {
    startServer()
  }

  render() {
    return (
      <React.Fragment> 
        <Navbar history={this.props.history}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={ (routerProps)=><Login showAlert={this.showAlert} {...routerProps} />}/> 
          <Route path='/signup' render={ (props) =><Signup showAlert={this.showAlert} {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
        <Alert open={this.state.openAlert} close={this.closeAlert}>{this.state.childrenAlert}</Alert>
      </React.Fragment>
      )
  }
}

export default withRouter (App);
