import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from "react-router-dom";
import * as storageToken from '../Utils/StorageToken'
import AuthTemplatePage from '../Components/template/AuthTemplate'

const AuthTemplateRoute = ({ component: Component, ...rest }) => {
    const token = storageToken.getCookieStorage('token');
    const history = useHistory()
    const AuthContext = React.createContext(null)
    if(token){
      history.push('/travel-list')
    }
    return (
        <AuthContext.Provider>
            <Route
          {...rest}
          render={({ location, history, ...props }) => (
            <AuthTemplatePage>
              <Component location={location} history={history} {...props} />
            </AuthTemplatePage>
          )}
        />
        </AuthContext.Provider>
    );
};

AuthTemplateRoute.propTypes = {
    
};

export default AuthTemplateRoute;