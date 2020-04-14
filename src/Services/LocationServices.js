import axios from 'axios';
import { camelizeKeys } from 'humps';

const getLocationList = () => {
    return axios.get('https://new-travel-database.herokuapp.com/location-details')
                .then(res => camelizeKeys(res.data))
}
const getLocationIdList = idLocation => {
    return axios.get(`https://new-travel-database.herokuapp.com/location-details/${idLocation}`, idLocation)
                .then(res => camelizeKeys(res.data))
}
export const LocationServices = {
    getLocationList,
    getLocationIdList,
}