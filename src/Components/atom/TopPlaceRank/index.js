import React, {useEffect, useState} from "react";
import './styles.scss'
import PropTypes from "prop-types";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as helper from '../../../Utils/helper'

const TopPlacesRanking = ({locationRestaurants}) => {
  // const [newRateStar, setNewRateStar] = useState([])
  // const filterReview = (reviewValue, reviewArr, maxValue) => {
    
  //   let result = reviewValue.filter(item => item.reviews === maxValue);
  //   reviewArr.push(...result);
  //   let newReviewArr = reviewValue.filter(item => !result.includes(item))
  //   if(maxValue === 0){
  //     return reviewArr
  //   }
  //   return filterReview(newReviewArr, reviewArr, maxValue -1)
   
  // }
  // const sortArrFunction = rateStarValue => {
  //   let newSortArr = filterReview(rateStarValue, [], 5);
  //   return newSortArr
  // }
  // const showStarReview = reviewArray => {
  //   let newStarArr = [];
  //   let emptyStar = [];
  //   let newSortArr = sortArrFunction(reviewArray)
  //   newSortArr.map((item, index) => {
  //     console.log(item)
  //   })
    // for(let i = 0; i < starArr.length; i++ ){
    //   newStarArr.push(<FontAwesomeIcon icon={faStar} className="review-start" style={{color: '#FDC830'}}/>)
    // }
    // if(starArr < 5){
    //   for(let k = starArr; k < 5; k++){
    //     emptyStar.push(<FontAwesomeIcon icon={faStar} className="review-start" />)
    //   }
    // }
    // return [...newStarArr, ...emptyStar]
  // }
  useEffect(() =>{

  })
  
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="place-rank-container">
      <div className="title-chart">
        <h3>TOP PLACES</h3>
        <div className="filter-chart">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              This week <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="list restaurant">
        {locationRestaurants ? locationRestaurants.toJS().map((item, index) =>(
           <div className="list-restaurant-container" key={index}>
            <div className="restaurant">
                  <div className="restaurant-img">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                  </div>
                  <div className="restaurant-name">
                        <h3>{item.restaurants}</h3>
                        <p>{helper.transferLocation(item.location)}</p>
                  </div>
                  
            </div>
           </div>
        )) : ''}
              <div className="rate-star">
                {/* {locationRestaurants ?
                  showStarReview(locationRestaurants.toJS())
               : ''} */}
              </div>
          {/* <div className="list-restaurant-container">
              <div className="restaurant">
                  <div className="restaurant-img">
                      <img src="https://placeimg.com/100/100/any" alt=""/>
                  </div>
                  <div className="restaurant-name">
                        <h3>loprem ipsum</h3>
                        <p>loprem ipsum</p>
                  </div>
              </div>
              <div className="rate-star">
              <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
              </div>
          </div>
          <div className="list-restaurant-container">
              <div className="restaurant">
                  <div className="restaurant-img">
                      <img src="https://placeimg.com/100/100/any" alt=""/>
                  </div>
                  <div className="restaurant-name">
                        <h3>loprem ipsum</h3>
                        <p>loprem ipsum</p>
                  </div>
              </div>
              <div className="rate-star">
              <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} />
              </div>
          </div>
          <div className="list-restaurant-container">
              <div className="restaurant">
                  <div className="restaurant-img">
                      <img src="https://placeimg.com/100/100/any" alt=""/>
                  </div>
                  <div className="restaurant-name">
                        <h3>loprem ipsum</h3>
                        <p>loprem ipsum</p>
                  </div>
              </div>
              <div className="rate-star">
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} style={{color: '#FDC830'}}/>
                <FontAwesomeIcon icon={faStar} />
              </div>
          </div> */}
      </div>
    </div>
  );
};

TopPlacesRanking.propTypes = {
  locationRestaurants: PropTypes.any,
};

export default TopPlacesRanking;
