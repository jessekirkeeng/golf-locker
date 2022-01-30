import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import UserProvider from './components/Sample/Sample'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);