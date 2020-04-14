import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faBeer, faGlasses, faMosque, faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import './styles.scss';

const LocationPlaces = ({locationActivities}) => {
    return (
        <div className="location-places">
            <div className="location-places-container">
                <div className="location-place-img" style={{background: '#800080'}}>
                    <FontAwesomeIcon icon={faHotel}/>
                </div>
                <div className="location-place-content">
                    <p>Hotel</p>
                    <p style={{fontSize: 30 + 'px', color:'#800080'}}>{locationActivities ? locationActivities.toJS()[0].hotels : 'Quantity'}</p>
                </div>
            </div>
            <div className="location-places-container">
                <div className="location-place-img" style={{background: '#ff5e62'}}>
                    <FontAwesomeIcon icon={faBeer}/>
                </div>
                <div className="location-place-content">
                    <p>Pubs</p>
                    <p style={{fontSize: 30 + 'px', color:'#ff5e62'}}>{locationActivities ? locationActivities.toJS()[0].pubs : 'Quantity'}</p>
                </div>
            </div>
            <div className="location-places-container">
                <div className="location-place-img" style={{background: '#0cebeb'}}>
                    <FontAwesomeIcon icon={faGlasses}/>
                </div>
                <div className="location-place-content">
                    <p>Cinemas</p>
                    <p style={{fontSize: 30 + 'px', color:'#0cebeb'}}>{locationActivities ? locationActivities.toJS()[0].cinemas : 'Quantity'}</p>
                </div>
            </div>
            <div className="location-places-container">
                <div className="location-place-img" style={{background: '#20e3b2'}}>
                    <FontAwesomeIcon icon={faMosque}/>
                </div>
                <div className="location-place-content">
                    <p>Museum</p>
                    <p style={{fontSize: 30 + 'px', color:'#20e3b2'}}>{locationActivities ? locationActivities.toJS()[0].museums : 'Quantity'}</p>
                </div>
            </div>
            <div className="location-places-container">
                <div className="location-place-img" style={{background: '#396afc'}}>
                    <FontAwesomeIcon icon={faTheaterMasks}/>
                </div>
                <div className="location-place-content">
                    <p>Theater</p>
                    <p style={{fontSize: 30 + 'px', color:'#396afc'}}>{locationActivities ? locationActivities.toJS()[0].theaters : 'Quantity'}</p>
                </div>
            </div>
        </div>
    );
};

LocationPlaces.propTypes = {
    locationActivities: PropTypes.any
};

export default LocationPlaces;