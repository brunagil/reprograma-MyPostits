import React, {Component} from 'react'
import './Input.css'

// EXEMPLO COM O USO DE FUNÇÃO PARA A CONSTRUÇÃO DO INPUT
// function Input(props) {
//     return (
//         <input
//             onChange={}                   
//             type={props.type}  //componentes funcionais
//             id={props.id}
//             className='input'
//             placeholder={props.placeholder}
//         />
//     )
// }

//EXEMPLO - utilizando os componentes e classes do React
class Input extends React.Component {
    constructor(props){
        super(props)
        this.state={message : null} //estado natural do código quando a página carrega 
    //this.handleChange = this.handleChange.bind(this) // se for utilizado a arrow function, n precisa dessa função
    
    }
    hasError = () => {
        if(this.state.message === null || this.state.message !== '') {
            return false 
        } else {
            return true
        }
    }
    handleChange = (e) => { //gaurdar a função para ser usada com o this lá embaixo
        const value = e.target.value
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //console.log('hello onchange', value)
        let message = ''
        
        if(this.props.required && value.trim() === '') { //tirar os espaços em branco e ter a tag 'required' no dom/html
            message = 'Campo Obrigatório' //mensagem que vai aparecer
        } else if(this.props.minLength && value.length < this.props.minLength ) {
            message = `Digite pelo menos ${this.props.minLength} caracteres`
        } else if(this.props.type ==='email' && !regex.test(value)) { //testa a função regex, e se for falso, dá uma mensagem de erro
            message= 'Digite um e-mail válido'
            
        }

        this.setState({message : message}, this.props.onChange()) //callback  
        //setState é função do react ==>> situação/estado atual das camisetas. Pode ter erro, pode não ter erro, etc
        //props ==> características da camiseta 

        //classe ==> muda o estado e function ==> não muda o estado

    }

    render() {
        return ( //react.fragment pede que os elementos não fiquem jogados, então é específico do React
            <React.Fragment> 
                <input
                    onChange={this.handleChange}
                    onBlur={this.handleChange}                  
                    type={this.props.type}  //componentes funcionais
                    id={this.props.id}
                    className='input'
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                />
                <p className='input__erro'>{this.state.message}</p>
            </React.Fragment>
        )
    }
}

export default Input 

