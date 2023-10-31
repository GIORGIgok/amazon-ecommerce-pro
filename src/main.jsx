import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import jwtDecode from 'jwt-decode';
// import './index.css'

// checking token expiration
const storedToken = localStorage.getItem('jwtToken');
if (storedToken) {
    const decodedToken = jwtDecode(storedToken);
    const currentTime = Date.now() / 1000; // converting to seconds
    if (decodedToken.exp < currentTime) {
        localStorage.removeItem('jwtToken'); // remove expired token
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>*/
    <Provider store={store}>
      <App />
    </Provider>
  /*</React.StrictMode>*/
);

