//arquivos de request da API para criar os Post its
import api from '../infra/api-config'  

export function createPostit(postit) {
    const url = '/todo' 

    const data  = { //dados que serão enviados para a API
        title : postit.title,  //título do post it
        desc : postit.text    // conteúdo do post it 
    }

    return api().post(url, data) 
}

export function getPostitsApi() { //pegar os posts its da API e trazer para o front
                //não necessita de parâmetros porque já foi cadastrado pelo createPost

    const url = '/todo' //url que a API deve buscar o conteúdo

    return api().get(url)  //metodo GET para pegar os elemntos da API 
}

export default api


