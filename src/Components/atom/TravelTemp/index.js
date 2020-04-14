import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import * as helper from '../../../Utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTint, faThermometerHalf, faHistory, faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons';


const TravelTempItem = ({name, getLocationTemp, locationTemp}) => {
    useEffect(() => {
        getLocationTemp(name)
    }, [])
    useEffect(() => {
    let newTempData = [] ;
        if(locationTemp){
            newTempData.push(...newTempData , locationTemp.toJS())
            setTempData(...newTempData)
        }
    }, [locationTemp])
    useEffect(() => {
        console.log('tempData', tempData)
    }, [tempData])
  return (
    <div className="travel-list-weather">
      <div className="main-temp">
        <div className="icon-temp">
          <div className="icon-temp-image">
            <img
              src={
                locationTemp
                  ? helper.handleUploadIconTemp(
                      locationTemp.toJS().weather[0].icon
                    )
                  : ""
              }
              alt=""
            />
          </div>
          <h3>
            {locationTemp ? locationTemp.toJS().weather[0].description : ""}
          </h3>
        </div>
        <div className="location-temp">
          <span>
            <h1>
              {locationTemp
                ? Math.ceil(locationTemp.getIn(["main", "temp"]) - 273)
                : ""}{" "}
            </h1>
            <p>oC</p>
          </span>
        </div>
      </div>
      <div className="another-temp">
        <div className="another-temp-detail">
          <FontAwesomeIcon icon={faPaperPlane} />
          <span className="anotther-main-temp">
            <h1>
              {locationTemp
                ? Math.ceil(locationTemp.getIn(["wind", "speed"]))
                : ""}
            </h1>
            <p>km/h</p>
          </span>
          <h4>Wind</h4>
        </div>
        <div className="another-temp-detail">
          <FontAwesomeIcon icon={faTint} />
          <span className="anotther-main-temp">
            <h1>
              {locationTemp
                ? Math.ceil(locationTemp.getIn(["main", "humidity"]))
                : ""}
            </h1>
            <p>%</p>
          </span>
          <h4>Humidity</h4>
        </div>
        <div className="another-temp-detail">
          <FontAwesomeIcon icon={faThermometerHalf} />
          <span className="anotther-main-temp">
            <h1>
              {locationTemp
                ? Math.ceil(
                    (Math.ceil(locationTemp.getIn(["main", "temp"])) /
                      Math.ceil(locationTemp.getIn(["main", "feelsLike"]))) *
                      100
                  )
                : ""}
            </h1>
            <p>oC</p>
          </span>
          <h4>Feels like</h4>
        </div>
        <div className="another-temp-detail">
          <FontAwesomeIcon icon={faHistory} />
          <span className="anotther-main-temp">
            <h1>
              {locationTemp
                ? Math.ceil(locationTemp.getIn(["main", "pressure"]))
                : ""}
            </h1>
            <p>in</p>
          </span>
          <h4>Pressure</h4>
        </div>
      </div>
    </div>
  );
};

TravelTempItem.propTypes = {};

export default TravelTempItem;
