import axios from 'axios'
import { camelizeKeys } from 'humps'

const listUser = () => {
    return axios.get('https://new-travel-database.herokuapp.com/list-users')
        .then(res => camelizeKeys(res.data))
}
export const UserServices = {
    listUser
}