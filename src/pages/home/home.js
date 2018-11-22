import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'
import PostIt from '../../components/postit'
import { getPostitsApi} from '../../apis/postit.api'

class Home extends React.Component {
    constructor(){  //tudo que for declaração de variável fica no constructor()
        super()
        this.state = {
            postits : []
        }
    }
    componentDidMount() {
        console.log('hello componentDidMount foi criado')
        this.getPostits()
    }
    componentWillUnmount() {
        console.log('hello componentWillUnmount morreu :(')
    }

    getPostits = () => { //faz a requisição pra API pra retornar a lista de post its cadastradas no backend
        getPostitsApi() //request API
            .then((response) => {
                console.log(response)
                this.setState({
                    postits : response.data.todo  //lista todos os post its
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        if(getUser()){ //se tiver um user logado
             return ( 
                <div className='home'>
                    <PostIt updatePostits = {this.getPostits}/> 
                    {this.state.postits.map((item, index) =>{ //for simplificado, que itera pelos post its
                            console.log('item', item)
                            return <PostIt 
                                key={item._id} //props do React (identificador da lista de elementos)
                                id={item._id}
                                title={item.title}
                                text={item.desc}
                                updatePostits = {this.getPostits} //atualiza os post its, chamando essa function quando 
                                //o post it for concluído
                            />
                    })}
                </div>
             )
        } else {
             return <Redirect to='/login' />
        }
    }
} 
export default Home
