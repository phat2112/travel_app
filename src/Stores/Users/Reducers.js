import {INITIAL_STATE} from './States'
import {USER_CONSTANTS} from './constants'
import {fromJS} from 'immutable'

const setUser = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_CONSTANTS.SET_USER_LIST:
            return state.merge(
                fromJS({
                    listUser: action.userList
                })
            )
        default: 
            return state
    }
}
export const UserReducers = {
    setUser
}