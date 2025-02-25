/* eslint-disable no-console */
import '@styles/index';
import 'sal.js/dist/sal.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import GlobalStyles from '@styles/globalStyles';
import ReduxStore from '@redux/ReduxStore';
import App from '@containers/App';
import useLog from '@hooks/useLog';

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  // eslint-disable-next-line quotes
  useLog("It's looks like we are in a development mode!", 'log');
} else if (NODE_ENV === 'production') {
  console.log = () => {};
  console.warn = () => {};
}

const rootEl = document.getElementById('root')! as HTMLDivElement;
const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ReduxStore>
      <App />
    </ReduxStore>
  </React.StrictMode>
);
