import {USER_CONSTANTS} from './constants'

const getUserList = () => ({
    type: USER_CONSTANTS.GET_USER_LIST,
})
const setUserList = userList => ({
    type: USER_CONSTANTS.SET_USER_LIST,
    userList,
})
const getUserErr = err => ({
    type: USER_CONSTANTS.GET_USER_LIST_ERROR,
    err,
})
export const UserActions = {
    getUserList,
    setUserList,
    getUserErr,
}