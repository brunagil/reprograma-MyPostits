import React from 'react'
import './postit.css'
// import { MdClose } from 'react-icons/lib/md/close'
import Form from '../form'
import { createPostit } from '../../apis/postit.api'

class PostIt extends React.Component {
    constructor(props) {
        super(props)
        this.state = { //criação de um estado para mudança em editar o post it após ser postado
            editing : false, //quando estiver 'true', ele está aberto para edição ('editing' é verdadeiro) 
            id: 0, 
            title: '',
            text: '',
        }
    }

    //--No clique, permitir que o post-it seja editado
    handlePostitClick = () => {
        this.setState({
            editing : true
        })
    }

    //--- Deletar o post it 
    handlePostitDelete = () => { 
        console.log('handlePostitDelete')
        }
    
    //--Submeter e salvar o post it na tela 
    handlePostitSubmit = (e) => {
        e.preventDefault()
        const postit = { //constante que contém todo o conteúdo do postit 
            title: this.state.title,
            textarea: this.state.text
        }
        //-- Camada para a API para salvar os post its criados  // PROMISE
        createPostit(postit) 
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    
        setTitle = (e) => {
            const inputTitle = e.target.value
            this.setState({ //executa o render de novo e modifica o title com o OnChange do input 
                title : inputTitle
            })
        }
    
        setText = (e) => {
            const inputText = e.target.value
            this.setState ({ //executa o render de novo e modifica o conteúdo com o OnChange do text
                text : inputText
            })
        }

    render() {
        return (
            <div className='postit' onClick={this.handlePostitClick} >
                <Form onSubmit={this.handlePostitSubmit}>
                    {this.state.editing && 
                        (<button onClick={this.handlePostitDelete} className='postit__button-remove'>
                            X
                        </button>)
                    }
                    <input 
                        type ='text' 
                        className='postit__title' 
                        placeholder ='Título...' 
                        value={this.state.title}
                        onChange={this.setTitle}
                    />
                    <textarea 
                        className='postit__text'
                        placeholder='Digite seu texto...'
                        type='text'
                        value={this.state.text}
                        onChange={this.setText}
                    />
                    {this.state.editing &&
                        (<button className= 'postit__button-completed'>
                            Concluido
                        </button>)
                    }
                </Form>
            </div>
        )
    }
}


export default PostIt

