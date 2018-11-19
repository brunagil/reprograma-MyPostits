//arquivos de request da API de Login
import api from '../infra/api-config'  //importar a configuração pronta 

export function loginUser(user) { //função que recebe os dados do login 
    const url = '/users/login' //informação dada pela API criada pelo backend

    const data  = { //constante das informações que vão estar contidas no login e são necessárias pra API
        //JSON objeto
        login : user.email,  //email do usuário
        password : user.password //senha do usuário 
    }

    return api().post(url, data) 
    //primeiro parâmetro = URL, segundo parâmetro = todos os dados que eu estou mandando
}

export default api




