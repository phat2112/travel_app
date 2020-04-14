import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import * as helper from '../../../Utils/helper'
import { HeartFilled, LikeFilled,  } from '@ant-design/icons';
import Loading from '../../atom/Loading';

const ListProfileUser = ({listUser, loading}) => {
    const toggleIconHandler = (idIcon, iconColor) => {
        console.log('aloalo', idIcon, iconColor)
        let icon = document.getElementById(idIcon) 
        if(icon.style.color === 'black'){
            icon.style.color = iconColor 
        } else {
            icon.style.color = 'black'
        }
        
    }
    return (
       <div className="list-profile-image">
           {listUser ? listUser.toJS().map((item, index) => (
                <div className='list-profile-user' key={index}>
                    <div className="list-profile-user-container" style={{background: helper.handleCssBackground(item.id)}}>
                        <div className="list-user-image">
                            <div className="list-image">
                                <img src={helper.handleUploadImage(item.avatar[0].url)} alt=""/>
                            </div>
                            <div className="list-user-profile">
                                <h4>{item.name}</h4>
                                <p>{item.address}</p>
                                <p>{item.date}</p>
                            </div>
                        </div>
                        <div className="list-user-title">
                            <h4>{item.locatrion}</h4>
                            <p>{item.comment}</p>
                        </div>
                        <div className="list-image-icon">
                            <HeartFilled id={item.id} onClick={() => toggleIconHandler(item.id, '#ED213A')}/>
                            <LikeFilled id={item.date} onClick={() => toggleIconHandler(item.date, '#0575E6')}/>
                        </div>
                        <div className="list-profile-middle-rectangle" style={{background: helper.handleCssBackground(item.id)}}>
                        </div>
                    </div>
                    <div className="user-profile-list-image">
                        {item.image.map((imageValue, iamgeIndex) => (
                            <div className="list-profile-image-container" key={iamgeIndex}>
                             <img src={helper.handleUploadImage(imageValue.url)} alt=""/>
                         </div>
                        ))}
                    </div>
                </div>
           )) : (
            <div className='list-profile-user'>
            <div className="list-profile-user-container">
                <div className="list-user-image">
                    <div className="list-image">
                        <img src="https://placeimg.com/100/100/people" alt=""/>
                    </div>
                    <div className="list-user-profile">
                        <h4>Charles Parks</h4>
                        <p>Paris, france</p>
                        <p>12.03.2015</p>
                    </div>
                </div>
                <div className="list-user-title">
                    <h4>Travel to Vietnam</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                </div>
                <div className="list-image-icon">
                    <HeartFilled />
                    <LikeFilled />
                </div>
                <div className="list-profile-middle-rectangle">
                </div>
            </div>
            <div className="user-profile-list-image">
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
                <div className="list-profile-image-container">
                    <img src="https://placeimg.com/100/100/any" alt=""/>
                </div>
            </div>
        </div>
           )}
        <Loading loading ={loading}/>
       </div>
    );
};

ListProfileUser.propTypes = {
    listUser: PropTypes.any,
    loading: PropTypes.bool
};

export default ListProfileUser;