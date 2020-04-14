const getLocationList = state => state['Location'].get('locationListData');
const getLocationIdData = state => state['LocationId'].get('locationIdData');

export const LocationSelectors = {
    getLocationList,
    getLocationIdData,
}