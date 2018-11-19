import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../../infra/local-storage'
import './menu.css'

class Menu extends React.Component {
    constructor(){
      super() 
      this.state = { open : false } //quando desktop, está fechado
      this.userLoginOrNot = getUser()
    }  
    handleOpenOrClose = () => {
        this.setState({ open: !this.state.open})
    }

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
                        <a onCLick={}>
                            { this.userLoginOrNot ? 'Sair' : 'Login'} 
                        </a>    
                    </li>
                </ul>
            </div>
        )
    }
}
//se VERDADADEIRO - se tem um usuário logado, children é igual a 'sair' e se falso é 'Login'
export default Menu