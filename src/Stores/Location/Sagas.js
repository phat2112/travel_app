import { put, call, takeLatest } from 'redux-saga/effects';
import {LocationServices} from '../../Services/LocationServices'
import {LOCATION_CONSTANT} from './constants';
import {LoadingActions} from '../Loading/Actions'
import {LocationActions} from './Actions';

function* getLocationList(){
    try{
        const resp = yield call(LocationServices.getLocationList)
        yield put(LocationActions.setLocationList(resp))
    }catch(err){
        yield put(LoadingActions.hideLoading(false))
    }
}
function* getLocationIdList({idLocation}){
    try{
        yield put(LoadingActions.showLoading(true))
        const resp = yield call(LocationServices.getLocationIdList, idLocation)
        yield put(LocationActions.setLocationId(resp))
        yield put(LoadingActions.hideLoading(false))
    } catch( err ) {
        yield put(LoadingActions.hideLoading(false))
        yield put(LocationActions.geLocationIdErr(err))
    }
}
export default function* watcher(){
    yield takeLatest(LOCATION_CONSTANT.GET_LOCATION_LIST, getLocationList)
    yield takeLatest(LOCATION_CONSTANT.GET_LOCATION_ID, getLocationIdList)
}