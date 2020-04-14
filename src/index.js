import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './Stores/index'
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as serviceWorker from './serviceWorker';

const store = configureStore()
ReactDOM.render(
   <Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
