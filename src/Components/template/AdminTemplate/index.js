import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../atom/Navbar';
import SideBar from '../../atom/SideBar';
import './styles.scss';

const AdminTemplate = props => {
    return (
        <div className="admin-template">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="admin-temlate-content">
                <div className="side-bar">
                    <SideBar />
                </div>
                <div className="admin-template-component">{props.children}</div>    
            </div>
        </div>
    );
};

AdminTemplate.propTypes = {
    
};

export default AdminTemplate;