import {combineReducers} from 'redux';
import {LoadingReducer} from '../Loading/Reducers';
import {AuthReducers} from '../Auth/Reducers';
import {LocationTempReducers} from '../LocationTemp/Reducers';
import {LocationListReducers} from '../Location/Reducers';
import {UserReducers} from '../Users/Reducers'

const rootReducer = combineReducers({
  Loading: LoadingReducer.showHideLoading,
  AuthLogin: AuthReducers.SetAuthLogin,
  LocationTemp: LocationTempReducers.setLocationTemp,
  Location: LocationListReducers.setLocationData,
  LocationId: LocationListReducers.setLocationIdData,
  Users: UserReducers.setUser,
})
export default rootReducer