import React ,{useEffect} from 'react';
import PropTypes from 'prop-types';
import LocationChart from '../Components/pages/LocationChart'
import {connect} from 'react-redux';
import {LocationActions} from '../Stores/Location/Actions'
import {LoadingSelectors} from '../Stores/Loading/Selectors';
import {LocationSelectors} from '../Stores/Location/Selectors'

const LocationChartContainer = ({match, getLocationIdData, locationIdData, loading}) => {
    let idLocation = match.params.id;
    useEffect(() => {
        getLocationIdData(idLocation)
    }, [])
    return (
        <div>
            <LocationChart locationIdData={locationIdData} loading={loading}/>
        </div>
    );
};

LocationChartContainer.propTypes = {
    getLocationIdData: PropTypes.func,
    loading: PropTypes.bool,
    locationIdData: PropTypes.any,
};
const mapStateToProps = state => ({
    locationIdData: LocationSelectors.getLocationIdData(state),
    loading: LoadingSelectors.loading(state),
})
const mapDispatchToProps = dispatch => ({
    getLocationIdData: idLocation => dispatch(LocationActions.getLocationId(idLocation)),
})
export default connect(mapStateToProps, mapDispatchToProps)(LocationChartContainer);