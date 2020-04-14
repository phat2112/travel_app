import { put, call, takeLatest } from 'redux-saga/effects';
import {AuthServices} from '../../Services/AuthServices';
import {AUTH_CONSTANT} from './constants';
import {AuthActions} from './Actions';
import {LoadingActions} from '../Loading/Actions'

function* authLogin({valueLogin, isRemember}){
    try{
        yield put(LoadingActions.showLoading(true))
        const resp = yield call(AuthServices.AuthLoginServices, valueLogin)
        yield put(AuthActions.setAuthLogin(resp))
        yield put(LoadingActions.hideLoading(false))
    }catch(err){
        yield put(LoadingActions.hideLoading(false))
        yield put(AuthActions.authLoginError(err))
    }
}
export default function* watcher(){
    yield takeLatest(AUTH_CONSTANT.AUTH_LOGIN, authLogin)
}