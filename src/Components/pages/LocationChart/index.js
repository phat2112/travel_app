import React, {useEffect} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import LocationPlace from '../../atom/LocationPlace';
import ActivityChart from '../../atom/ActivityChart';
import TopPlacesRanking from '../../atom/TopPlaceRank';
import WarningChart from '../../atom/WarningChart';
import PlacesChart from '../../atom/PlacesChart'


const LocationChart = ({locationIdData}) => {
    return (
        <div className='location-chart-container'>
            <LocationPlace locationActivities={locationIdData ? locationIdData.get('locationActivities') : ''}/>
            <div className="location-activity-chart">
                <ActivityChart />
                 <TopPlacesRanking locationRestaurants={locationIdData ? locationIdData.get('listRestaurants') : ''}/>
            </div>
            <div className="location-activity-chart">
                <PlacesChart />
                <WarningChart locationActivities={locationIdData ? locationIdData.get('locationActivities') : ''}/>
            </div>
        </div>
    );
};

LocationChart.propTypes = {
    
};

export default LocationChart;