import React from 'react';
import PropTypes from 'prop-types';
import * as storageToken from '../../../Utils/StorageToken'
import { useHistory } from 'react-router-dom';
import './styles.scss';

const PageNotFound = props => {
    const history = useHistory()
    const handleLinkLogin = () => {
        const getToken = storageToken.getCookieStorage('token');
        if(getToken){
            history.push('/travel-list')
        }
        history.push('/login')
    }
    return (
        <div className='page-not-found'>
           <div className='page-err'>
            <h1>Opps Seem you type wrong URL</h1>
                <button onClick={() => handleLinkLogin()}>Back to home</button>
           </div>
        </div>
    );
};

PageNotFound.propTypes = {
    
};

export default PageNotFound;