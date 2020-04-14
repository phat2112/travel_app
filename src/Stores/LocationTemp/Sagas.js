import { put, call, takeLatest } from 'redux-saga/effects';
import {LocationTempServices} from '../../Services/LocationTemp';
import {LocationTempActions} from './Actions';
import {TEMP_CONSTANT} from './constants'

function* getLocationTemp({location}){
    try{
        const resp = yield call(LocationTempServices.locationTemp, location)
        yield put(LocationTempActions.setLocationTemp(resp))
    }catch(err){
        yield put(LocationTempActions.getLocationError(err))
    }
}
export default function* watcher(){
    yield takeLatest(TEMP_CONSTANT.GET_LOCATION_TEMP, getLocationTemp)
}