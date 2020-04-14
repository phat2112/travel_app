import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Background from '../../../Assets/images/background.jpg'

const AuthTemplatePage = props => {
    return (
        <div className='auth-template'>
           <div className="auth-template-background">
                <img src={Background} alt=""/>
           </div>
           <div className="auth-template-form">
               {props.children}
           </div>
        </div>
    );
};

AuthTemplatePage.propTypes = {
    
};

export default AuthTemplatePage;