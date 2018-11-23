import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

class Menu extends React.Component {
    constructor(props){
      super(props) 
      this.state = { open : false } //quando desktop, está fechado      
    }  

    //Função do menu estar aberto ou fechado
    handleOpenOrClose = () => {
        this.setState({ open: !this.state.open}) //se verdadeiro, abre; se falso, fecha
    }

    handleLoginOrLogout = (e) => {
        e.preventDefault() 
        if(this.props.user) { //se tiver um usuário logado
            localStorage.clear() //limpa o user local 
        } 
        this.props.history.push('/login') //recebe props, que contém history
        //redireciona para a página de Login 

    }

    //O que é DidMount e WillUnMount? Testes com console.log
    // componentDidMount() {
    //     console.log('hello componentDidMount')
    // }
    // componentWillUnmount() {
    //     console.log('hello componentWillUnmount morreu :(')
    // }

    render() {
        let classesOfButton = 'menu__button'
        let classesOfOptions = 'menu__options'

        if (this.state.open) {
            classesOfButton += ' menu__button--open'
            classesOfOptions += ' menu__options--open'
        }

        return (
            <div>
                <a className={classesOfButton} onClick={this.handleOpenOrClose}>
                    Menu
                </a>
                <ul className={classesOfOptions} onClick={this.handleOpenOrClose}>
                    <li>
                        <Link to='/quem-somos'>
                            Quem somos
                        </Link>    
                    </li>
                    <li>
                        <Link to='/contato'>
                            Contato
                        </Link>    
                    </li>
                    <li>
                        <a onClick={this.handleLoginOrLogout}>
                            { this.props.user ? 'Sair' : 'Login'}
                        </a>    
                    </li>
                </ul>
            </div>
        )
    }
}
//se VERDADADEIRO - se tem um usuário logado, children é igual a 'sair' e se falso é 'Login'
export default Menu