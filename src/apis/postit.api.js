//arquivos de request da API para criar os Post its
import api from '../infra/api-config'  

//----- CRIAR UM NOVO POST IT 
export function createPostit(postit) {
    const url = '/todo' 

    const data  = { //dados que serão enviados para a API
        title : postit.title,  //título do post it
        desc : postit.text,    // conteúdo do post it 
        color : postit.color
    }

    return api().post(url, data) 
}

//---- CHAMAR NA API TODOS OS POSTS ITS CRIADOS

export function getPostitsApi() { //pegar os posts its da API e trazer para o front
                //não necessita de parâmetros porque já foi cadastrado pelo createPost

    const url = '/todo' //url que a API deve buscar o conteúdo

    return api().get(url)  //metodo GET para pegar os elemntos da API 
}

//---- DELETAR UM POST IT NO BOTÃO 'X'
export function deletePostit(idPostit) { //recebe como parâmetro o ID do post it (via backend)
    const url = `/todo/${idPostit}` //concatena de forma dinâmica o id do post it na URL

    return api().delete(url)
}

//---- ATUALIZAR AS INFORMAÇÕES DO POST IT 
export function updatePostitApi(postit) { //objeto postit, que tem title e desc 
    const url = `/todo/${postit.id}` //o acesso ao ID é feito por postit.id

    const data = { //mesmas constantes utilizadas anteriormente 
        title : postit.title,  
        desc : postit.text, 
        color : postit.color
    }

    return api().put(url, data)
}

export default api


