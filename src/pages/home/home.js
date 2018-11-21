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

    getPostits = () => {
        getPostitsApi()
            .then((response) => {
                console.log(response)
                this.setState({
                    postits : response.data.todo
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        if(getUser()){
             return this.state.postits.map((item) => { //For simplificado
                            console.log('item', item)
                            return <PostIt />
                        })
        } else {
             return <Redirect to='/login' />
        }
    }
} 
export default Home
