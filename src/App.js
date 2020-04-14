import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthTemplateRoute from './Containers/AuthTemplateRoute'
import LoginPagecontainer from './Containers/LoginPage';
import DashboardContainer from './Containers/Dashboard';
import RegisterPage from './Components/pages/RegisterPage'
import ForgotPassword from './Components/pages/ForgotPassword';
import AdminTemplateRoute from './Containers/AdminTemplate';
import LocationChartContainer from './Containers/LocationChart';
import PageNotFound from './Components/pages/PageNotFound';
import ListProfileUserContainer from './Containers/ListProfileUser';

function App() {
  return (
   <BrowserRouter>
      <Switch>
        <AuthTemplateRoute path='/login' component={LoginPagecontainer}/>
        <AuthTemplateRoute path='/register' component={RegisterPage}/>
        <AuthTemplateRoute path='/forgot-password' component={ForgotPassword}/>
        <AdminTemplateRoute path='/travel-list' component={DashboardContainer}/>
        <AdminTemplateRoute path ='/travel-places/:id' component={LocationChartContainer} />
        <AdminTemplateRoute path ='/users' component={ListProfileUserContainer} />
        <Redirect exact path='/' to='/travel-list'/>
        <Route path="*" component={PageNotFound} />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
