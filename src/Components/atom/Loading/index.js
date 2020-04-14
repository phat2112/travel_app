import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import {LoadingOutlined} from '@ant-design/icons';

const Loading = ({loading}) => {
    useEffect(() => {
        let loadingContainer = document.getElementById('loading-container');
        if(loading){
            loadingContainer.style.boxShadow = '0 0 0 1300px #2bb673';
            loadingContainer.style.opacity = 1;

        }
        else{
            loadingContainer.style.boxShadow = '0 0 0 0 #2bb673';
            loadingContainer.style.opacity = 0;
        }
    }, [loading])
    return (
        <div className='loading-container' id='loading-container'>
            <LoadingOutlined />
            <h1><span></span></h1>
        </div>
    );
};

Loading.propTypes = {
    
};

export default Loading;