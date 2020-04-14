import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {LocationTempActions} from '../Stores/LocationTemp/Actions'
import {LocationTempSelectors} from '../Stores/LocationTemp/Selectors'
import {LocationActions} from '../Stores/Location/Actions';
import {LocationSelectors} from '../Stores/Location/Selectors';
import {LoadingSelectors} from '../Stores/Loading/Selectors';
import Dashboard from '../Components/pages/Dashboard';

const DashboardContainer = ({getLocationTemp, locationTemp, getLocationList, locationList, getLocationIdData, locationIdData, loading}) => {
    const [idCities, setIdCities] = useState([])
    useEffect(() => {
        let newArr = []
        if(locationList){
            locationList.toJS().map(item => newArr.push(item.idCity))
            setIdCities(newArr)
        }
    }, [locationList])
    useEffect(() => {
        if(idCities.length > 0){
            getLocationTemp(idCities)
        }
    }, [idCities])
    useEffect(() => {
        getLocationList()
    }, [])
    return (
        <div>
            <Dashboard locationTemp={locationTemp} locationList={locationList} getLocationIdData={getLocationIdData} locationIdData={locationIdData}  loading={loading}/>
        </div>
    );
};

DashboardContainer.propTypes = {
    getLocationTemp: PropTypes.func,
    locationTemp: PropTypes.any,
    getLocationList: PropTypes.func, 
    locationList: PropTypes.any,
    getLocationIdData: PropTypes.func,
    locationIdData: PropTypes.any,
    loading: PropTypes.bool,
};

const mapStateToProps = state => ({
    locationTemp: LocationTempSelectors.locationTempData(state),
    locationList: LocationSelectors.getLocationList(state),
    locationIdData: LocationSelectors.getLocationIdData(state),
    loading: LoadingSelectors.loading(state),
})
const mapDispatchToProps = dispatch => ({
    getLocationTemp: location => dispatch(LocationTempActions.getLocationTemp(location)),
    getLocationList: () => dispatch(LocationActions.getLocationList()),
    getLocationIdData: idLocation => dispatch(LocationActions.getLocationId(idLocation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);