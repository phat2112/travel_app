import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faCommentAlt, faCalendarAlt, faImages, faChartPie, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const SideBar = props => {
    const handleLinkMenu = iconId => {
        let idIcon = document.getElementById(iconId)
        idIcon.style.color='#2bb673';
        idIcon.style.opacity = 0.8;
    }
    return (
        <div className='side-bar-container'>
            <div className="side-bar-item">
                <NavLink to='/travel-list' activeClassName='active-route'>
                    <span onClick={() => handleLinkMenu('fa-map')}>
                    <FontAwesomeIcon icon={faMap} id='fa-map'  />
                    </span>
                </NavLink>
            </div>
            <div className="side-bar-item">
                <Link >
                    <span  onClick={() => handleLinkMenu('fa-map')}>
                    <FontAwesomeIcon icon={faCommentAlt} id='fa-map' />
                    </span>
                </Link>
            </div>
            <div className="side-bar-item">
                <Link activeClassName='active-route'>
                    <span  onClick={() => handleLinkMenu('fa-map')}>
                    <FontAwesomeIcon icon={faCalendarAlt} id='fa-map' />
                    </span>
                </Link>
            </div>
            <div className="side-bar-item">
                <NavLink to='/users' activeClassName='active-route'>  
                    <span  onClick={() => handleLinkMenu('fa-map')}>
                    <FontAwesomeIcon icon={faImages} id='fa-map' />
                    </span>
                </NavLink>
            </div>
            <div className="side-bar-item">
                <NavLink to='/travel-places/:id' activeClassName='active-route'>
                    <span  onClick={() => handleLinkMenu('fa-map')}>
                    <FontAwesomeIcon icon={faChartPie} id='fa-map' />
                    </span>
                </NavLink>
            </div>
            <div className="side-bar-item">
                <span  onClick={() => handleLinkMenu('fa-map')}>
                <FontAwesomeIcon icon={faExclamationCircle} id='fa-map' />
                </span>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;