import {LOCATION_CONSTANT} from './constants';

const getLocationList = () => ({
    type: LOCATION_CONSTANT.GET_LOCATION_LIST,
})
const setLocationList = (locationListData) => ({
    type: LOCATION_CONSTANT.SET_LOCATION_LIST,
    locationListData,
})
const getLocationErr = err => ({
    type: LOCATION_CONSTANT.GET_LOCATION_LIST_ERROR,
    err,
})
const getLocationId = idLocation => ({
    type: LOCATION_CONSTANT.GET_LOCATION_ID,
    idLocation,
})
const setLocationId = idLocationData => ({
    type: LOCATION_CONSTANT.SET_LOCATION_ID_LIST,
    idLocationData,
}) 
const geLocationIdErr = err => ({
    type: LOCATION_CONSTANT.GET_LOCATION_ERROR,
    err,
})
export const LocationActions = {
    getLocationList,
    setLocationList,
    getLocationErr,
    getLocationId,
    setLocationId,
    geLocationIdErr,
}