import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import { Provider } from "react-redux"
import store from './redux/store';
import './index.module.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')
);






