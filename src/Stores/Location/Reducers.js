import { LOCATION_CONSTANT } from "./constants";
import { fromJS } from "immutable";
import { INITIAL_STATE } from "./States";

const setLocationData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CONSTANT.SET_LOCATION_LIST:
      return state.merge(
        fromJS({
          locationListData: action.locationListData
        })
      );
    default:
        return state
  }
};
const setLocationIdData = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOCATION_CONSTANT.SET_LOCATION_ID_LIST:
      return state.merge(
        fromJS({
          locationIdData: action.idLocationData,
        })
      )
    default:
      return state
  }
}
export const LocationListReducers = {
    setLocationData,
    setLocationIdData,
}
