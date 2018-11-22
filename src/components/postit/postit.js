import React from 'react'
import './postit.css'
// import { MdClose } from 'react-icons/lib/md/close'
import Form from '../form'
import { createPostit, deletePostit, updatePostitApi } from '../../apis/postit.api'

class PostIt extends React.Component {
    constructor(props) {
        super(props)
        this.state = { //criação de um estado para mudança em editar o post it após ser postado
            editing : false, //quando estiver 'true', ele está aberto para edição ('editing' é verdadeiro) 
            id: this.props.id ? this.props.id : null, 
            title: this.props.title ? this.props.title : '',
            text: this.props.text ? this.props.text : '',
        }
    }

    //--No clique, permitir que o post-it seja editado
    handlePostitClick = () => {
        this.setState({
            editing : true
        })
    }

//--- DELETAR O POST IT

    handlePostitDelete = (e) => { 
        // console.log('handlePostitDelete')
        e.stopPropagation()

        const id = this.state.id
        deletePostit(id)
            .then((response) => {
                this.props.updatePostits()
                
            })
            .catch((error) => {
                console.log(error)
            })
        }
    
    //--Submeter e salvar o post it na tela 
    handlePostitSubmit = (e) => {
        e.preventDefault()
        const postit = { //constante que contém todo o conteúdo do postit 
            title: this.state.title,
            text: this.state.text
        }
        if(this.state.id) {
            const postit = {
                title: this.state.title,
                text: this.state.text,
                id : this.state.id
           }
            
            updatePostitApi(postit)
                .then((response) => {
   
                    
                })
                .catch((error) => {
                })


        } else {
            //-- Camada para a API para salvar os post its criados  // PROMISE
            const postit = {
                title: this.state.title,
                text: this.state.text,
                id : this.state.id
           }
            createPostit(postit) 
                .then((response) => {
                    console.log(response)
                    this.props.updatePostits() //atualizar os posts its na tela por props
                    this.setState({
                        id:'',
                        title:'',
                        text:'',
                        editing: false
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            }
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
                        (<button
                            type='button' 
                            onClick={this.handlePostitDelete} 
                            className='postit__button-remove'>
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

