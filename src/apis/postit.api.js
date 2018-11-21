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

export default api


