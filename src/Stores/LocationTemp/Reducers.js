import {TEMP_CONSTANT} from './constants';
import {INITIAL_STATE} from './States';
import { fromJS } from 'immutable';

const setLocationTemp = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TEMP_CONSTANT.SET_LOCATION_TEMP:
            return state.merge(
                fromJS({
                    locationData: action.locationData
                })
            )
        default:
            return state
    }
}
export const LocationTempReducers = {
    setLocationTemp,
}