import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'sal.js/dist/sal.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/app';
import GlobalStyles from 'styles/globalStyles';
import { PixabayBaseURL, PixabayKey } from 'utils';

if (process.env.NODE_ENV === 'development') {
  console.log(`It's looks like we are in a development mode!`);
}

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

console.log(PixabayKey);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
