import {put, call, takeLatest} from 'redux-saga/effects'
import {UserServices} from '../../Services/UserServices'
import {USER_CONSTANTS} from './constants'
import {UserActions} from './Actions'
import {LoadingActions} from '../Loading/Actions'

function* getUserList(){
    try{
        yield put(LoadingActions.showLoading(true))
        const resp = yield call(UserServices.listUser)
        yield put(UserActions.setUserList(resp))
        yield put(LoadingActions.hideLoading(false))
    } catch(err) {
        yield put(LoadingActions.hideLoading(false))
        yield put(UserActions.getUserErr(err))
    }
}
export default function* watcher() {
    yield takeLatest(USER_CONSTANTS.GET_USER_LIST, getUserList)
}