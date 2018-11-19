import api from '../infra/api-config'

function signupUser(user) {
    const url ='/users'

    // const data = {
    //     name: user.name,
    //     login: user.email,
    //     phone: user.phone,
    //     password: user.email,

    // }

    return api().post(url, user) //ou data
}

export default signupUser