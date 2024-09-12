import React from 'react';
import { toast } from 'react-toastify';
import { PixabayBaseURL, PixabayKey } from '../utils';
import { log } from '../functions';

// Components
import { Layout } from '../app';
import axios from 'axios';

const App = () => {
  const globalHeader: string = 'application/json';
  axios.defaults.baseURL = PixabayBaseURL;

  axios.defaults.headers.common['Content-Type'] = globalHeader;

  if (!PixabayKey) {
    toast.error('Missing apiKey? Add it and restart the app!');
    log('Missing apiKey? Add it and restart the app!', 'error');
  }

  return <Layout />;
};

export default App;
