import {TEMP_CONSTANT} from './constants'

const getLocationTemp = location => ({
    type: TEMP_CONSTANT.GET_LOCATION_TEMP,
    location
})
const setLocationTemp = locationData => ({
    type: TEMP_CONSTANT.SET_LOCATION_TEMP,
    locationData,
})
const getLocationError = err => ({
    type: TEMP_CONSTANT.GET_LOCATION_TEMP_ERROR,
    err
})
export const LocationTempActions = {
    getLocationTemp,
    setLocationTemp,
    getLocationError,
}