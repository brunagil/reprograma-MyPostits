export function getUser() { //-->  pega as informações do user 
    return localStorage.getItem('user')
}

export function setUser(user){ //--salva as informações do User no localStorage 
    localStorage.setItem('user', JSON.stringify(user)) //stringify--> transforma o json em string 
}

