import {INITIAL_STATE} from './State';
import {LOADING_CONSTANT} from './constants'

const showHideLoading = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_CONSTANT.SHOW_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case LOADING_CONSTANT.HIDE_LOADING:
        return {
            ...state,
            loading: action.loading
        }
        default: 
            return state
    }
}
export const LoadingReducer = {
    showHideLoading,
}