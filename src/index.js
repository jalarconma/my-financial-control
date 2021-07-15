import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import updatedAwsConfig from './amplify-config/amplify-configuration';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './store/user-slice';
import { BrowserRouter } from 'react-router-dom';

Amplify.configure(updatedAwsConfig);

const store = configureStore({
  reducer: { user: userSlice.reducer }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
