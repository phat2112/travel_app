import React, {useEffect, useState} from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import * as helper from "../../../Utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Traveloka from '../../../Assets/images/traveloka-logo.png';
import Airbnb from '../../../Assets/images/airbnb.png';
import Agoda from '../../../Assets/images/agoda.png'
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

const LocationDetail = ({ locationIdData }) => {
  const history = useHistory()
  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        };
  const handleCssStar = valueReview => {
      console.log('valueReview', valueReview)
      let startArr = [];
      let emptyStar = [];
    for(let i = 0; i < valueReview; i++){
      startArr.push(<FontAwesomeIcon icon={faStar} className="review-start" style={{color: '#FDC830'}}/>)
    }
    if(valueReview < 5){
      for(let j = valueReview; j < 5 ; j++){
        emptyStar.push(<FontAwesomeIcon icon={faStar} className="review-start"/>)
      }
    }
    return [...startArr, ...emptyStar]
  };
  const locationInforHandler = idLocation => {
    history.push(`/travel-places/${idLocation}`)
  }
 
  return (
    <div>
      {locationIdData ? (
        <div className='location-detail-container'>
          <h1>{helper.handleTransferName(locationIdData.get("idCity"))}</h1>
          <div className="location-detail-image">
            <Slider {...settings}>
                {locationIdData.toJS().image.map((item, index) => (
                    <div key={index} className='slick-image-container'>
                        <img src={helper.handleUploadImage(item.url)} alt=""/>
                    </div>
                ))}
            </Slider>
          </div>
          <div className="location-detail-review">
                <div className="review-title">
                    <h4>Rate :</h4>
                </div>
                <div className="location-review-start">
                    { handleCssStar(locationIdData.toJS().review) }
                </div>
          </div>
          <div className="location-detail-tour">
            <h3>monthly tour Check it out!</h3>
            <div className="tour-partnership">
              <a href={locationIdData.toJS().url}>
                <div className="partnership-container">
                  <div className="partner-img">
                    <img src={Traveloka} alt=""/>
                  </div>
                  <h4>Traveloka</h4>
                </div>
              </a>
              <a href={locationIdData.toJS().url}>
                <div className="partnership-container">
                  <div className="partner-img">
                    <img src={Airbnb} alt=""/>
                  </div>
                  <h4>Airbnb</h4>
                </div>
              </a>
              <a href={locationIdData.toJS().url}>
                <div className="partnership-container">
                  <div className="partner-img">
                    <img src={Agoda} alt=""/>
                  </div>
                  <h4>Agoda</h4>
                </div>
              </a>
            </div>
          </div>
          <div className="location-detail-button">
            <button onClick={() => locationInforHandler(locationIdData.toJS().id)}>Location's information</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

LocationDetail.propTypes = {
  locationIdData: PropTypes.any,
};

export default LocationDetail;
