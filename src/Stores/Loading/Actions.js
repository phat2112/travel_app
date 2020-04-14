import { LOADING_CONSTANT } from './constants'

const showLoading = loading => ({
    type: LOADING_CONSTANT.SHOW_LOADING,
    loading,
})
const hideLoading = loading => ({
    type: LOADING_CONSTANT.HIDE_LOADING,
    loading,
})
export const LoadingActions = {
    showLoading,
    hideLoading,
}