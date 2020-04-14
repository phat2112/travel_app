import {AUTH_CONSTANT} from './constants';

const authLogin = (valueLogin, isRemember) => ({
    type: AUTH_CONSTANT.AUTH_LOGIN,
    valueLogin,
})
const setAuthLogin = token => ({
    type: AUTH_CONSTANT.AUTH_LOGIN_SUCCESS,
    token
})
const authLoginError = err => ({
    type: AUTH_CONSTANT.AUTH_LOGIN_FAILED,
    err,
})
export const AuthActions = {
    authLogin,
    setAuthLogin,
    authLoginError,
}