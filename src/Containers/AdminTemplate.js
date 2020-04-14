import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from "react-router-dom";
import Admintemplate from '../Components/template/AdminTemplate'
import * as storageToken from '../Utils/StorageToken'

const AdminTemplateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    const AdminContext = React.createContext(null)
    const token = storageToken.getCookieStorage('token');
    if(!token){
      history.push('/login')
    }
    return (
        <AdminContext.Provider>
               <Route
          {...rest}
          render={({ location, history, ...props }) => (
            <Admintemplate>
              <Component location={location} history={history} {...props} />
            </Admintemplate>
          )}
        />
        </AdminContext.Provider>
    );
};

AdminTemplateRoute.propTypes = {
    
};

export default AdminTemplateRoute;