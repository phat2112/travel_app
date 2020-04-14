import axios from 'axios'

const AuthLoginServices = value => {
    return axios.post(`https://reqres.in/api/login`, value)
            .then(res => res.data)
}
export const AuthServices = {
    AuthLoginServices,
}