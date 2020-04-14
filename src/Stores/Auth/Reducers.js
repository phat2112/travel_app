import {AUTH_CONSTANT} from './constants'
import {INITIAL_STATE} from './State'
import {fromJS} from 'immutable'
import * as helper from '../../Utils/StorageToken'

const SetAuthLogin = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AUTH_CONSTANT.AUTH_LOGIN_SUCCESS:
            helper.storageCookie('token', action.token.token, 14);
            // helper.storageSession('token', action.token.token);
            return state.merge(
                fromJS({
                    authToken: action.token.token,
                })
            )
        default: 
            return state
    }
}
export const AuthReducers = {
    SetAuthLogin,
}