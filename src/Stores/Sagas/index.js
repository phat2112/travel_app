import {all} from 'redux-saga/effects';
import AuthSaga from '../Auth/Sagas'
import TempSaga from '../LocationTemp/Sagas'
import Locationsaga from '../Location/Sagas'
import UserSaga from '../Users/Sagas'

export default function* rootSaga(){
	yield all([
		AuthSaga(),
		TempSaga(),
		Locationsaga(),
		UserSaga(),
	])
}
