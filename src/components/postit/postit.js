import React from 'react'
import './postit.css'
// import { MdClose } from 'react-icons/lib/md/close'
import Form from '../form'

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

    handlePostitClick = () => {
        this.setState({
            editing : true
        })
    }

    handlePostitDelete = () => {
        console.log('handlePostitDelete')
        }
    


    render() {
        return (
            <div className='postit' onClick={this.handlePostitClick} >
                <Form>
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
                    />
                    <textarea 
                        className='postit__text'
                        placeholder='Digite seu texto...'
                        name='text'
                        value={this.state.text}
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

