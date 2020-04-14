import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as helper from "../../../Utils/helper";
import Loading from "../../atom/Loading";
import {
  faPaperPlane,
  faTint,
  faThermometerHalf,
  faHistory
} from "@fortawesome/free-solid-svg-icons";
import LocationDetail from "../../atom/LocationDetail";

const Dashboard = ({
  locationTemp,
  locationList,
  getLocationIdData,
  locationIdData,
  loading,
}) => {
  const [toggleDetail, setToggleDetail] = useState(false);
  const handletoggleDetail = valueDetail => {
    setToggleDetail(true);
    getLocationIdData(valueDetail);
  };
  useEffect(() => {
    if (locationTemp) {
      console.log("locationTemp", locationTemp.toJS());
    }
  }, [locationTemp]);
  return (
    <>
      <div className="travel-list">
        <div
          className="location-detail"
          style={{ display: toggleDetail ? "block" : "none" }}
        >
          <LocationDetail locationIdData={locationIdData} />
        </div>
        <div className="location-list-container">
          <div className="travel-description-container">
            {locationList
              ? locationList.toJS().map((item, index) => (
                  <div className="travel-list-container" key={index}>
                    <div className="travel-description-container">
                      <div className="travel-list-image">
                        <img
                          src={helper.handleUploadImage(item.image[0].url)}
                          alt=""
                        />
                      </div>
                      <div
                        className="travel-list-content"
                        style={{
                          background: helper.handleCssBackground(item.idCity)
                        }}
                      >
                        <div
                          className="travel-list-description"
                          style={{ width: 40 + '%' }}
                        >
                          <h1>{helper.handleTransferName(item.idCity)}</h1>
                          <div className="travel-list-rank"></div>
                          <p>{item.description}</p>
                          <button
                            className="travel-list-detail"
                            onClick={() => handletoggleDetail(item.id)}
                          >
                            {" "}
                            See more{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div
            className="travel-weather-container"
            style={{ right: toggleDetail ? 0 + "%" : 10 + "%" }}
          >
            {locationTemp
              ? locationTemp.toJS().list.map((item, index) => (
                  <div className="travel-list-weather">
                    <div className="main-temp">
                      <div className="icon-temp">
                        <div className="icon-temp-image">
                          <img
                            src={helper.handleUploadIconTemp(
                              item.weather[0].icon
                            )}
                            alt=""
                          />
                        </div>
                        <h3>{item.weather[0].description}</h3>
                      </div>
                      <div className="location-temp">
                        <span>
                          <h1>{Math.ceil(item.main.temp)} </h1>
                          <p>oC</p>
                        </span>
                      </div>
                    </div>
                    <div className="another-temp">
                      <div className="another-temp-detail">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span className="anotther-main-temp">
                          <h1>{Math.ceil(item.wind.speed)}</h1>
                          <p>km/h</p>
                        </span>
                        <h4>Wind</h4>
                      </div>
                      <div className="another-temp-detail">
                        <FontAwesomeIcon icon={faTint} />
                        <span className="anotther-main-temp">
                          <h1>{Math.ceil(item.main.humidity)}</h1>
                          <p>%</p>
                        </span>
                        <h4>Humidity</h4>
                      </div>
                      <div className="another-temp-detail">
                        <FontAwesomeIcon icon={faThermometerHalf} />
                        <span className="anotther-main-temp">
                          <h1>
                            {Math.ceil(
                              (Math.ceil(item.main.temp) /
                                Math.ceil(item.main.feelsLike)) *
                                100
                            )}
                          </h1>
                          <p>oC</p>
                        </span>
                        <h4>Feels like</h4>
                      </div>
                      <div className="another-temp-detail">
                        <FontAwesomeIcon icon={faHistory} />
                        <span className="anotther-main-temp">
                          <h1>{Math.ceil(item.main.pressure)}</h1>
                          <p>in</p>
                        </span>
                        <h4>Pressure</h4>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <Loading loading={loading}/>
    </>
  );
};
Dashboard.propTypes = {
  getLocationTemp: PropTypes.func,
  locationTemp: PropTypes.any,
  getLocationIdData: PropTypes.func,
  locationIdData: PropTypes.any,
  loading: PropTypes.bool,
};

export default Dashboard;
