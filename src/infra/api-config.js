import axios from 'axios'  ///lib de requisição para a API
import { getUser } from './local-storage'

const config = {  //criação do objeto com a URL 
    baseURL : 'https://lehtodoapi.herokuapp.com/', //apontamento para a url da API
    timeout : 5000, //o tempo máximo de espera e resposta da API
    headers: ''
}

//--- DE ACORDO COM A DOCUMENTAÇÃO
// é a mesma coisa que:
// axios.create({
//     baseUrl : 'https://lehtodoapi.herokuapp.com/',
//     timeout : 5000,
// }) .get('/ping')

//por conta do aplicativo ser gratuito do heroku, precisamos
//criar uma função para evitar travamentos do servidor no início

function api(){
    if(getUser()) { //se tiver usuário logado
        config.headers = {
        user : getUser() //pega os dados do usuário logado e permite que os post its aconteçam
        }
    }
    return axios.create(config) //retorna a função pronta da configuração
}

export function startServer(){ //exporta a função para ser utilizada na APP.JS
    const url = '/ping' //da API => É para certificar que a aplicação está funcionando

    return api().get(url) //retorna o método de get
}

export default api 