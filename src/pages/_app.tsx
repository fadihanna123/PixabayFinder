import { Provider } from 'react-redux';
import '../styles';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'sal.js/dist/sal.css';
import GlobalStyles from 'styles/globalStyles';
import { store } from 'redux/app';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log("It's looks like we are in a development mode!");
  }

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Head>
          <meta charSet='utf-8' />
          <title>PixaBayFinder</title>
          <meta httpEquiv='X-UA-Compatible' content='IE=7' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta httpEquiv='cache-control' content='no-cache' />
          <meta httpEquiv='expires' content='0' />
          <meta httpEquiv='pragma' content='no-cache' />
          <meta name='author' content='Fadi Hanna' />
          <meta name='keywords' content='API, Search, Pixabay, Finder' />
          <meta
            name='description'
            content='Pixabay Finder search photos from Pixabay API.'
          />
          <link
            type='image/'
            href='assets/pixabay-icon-filled.png?v=1'
            rel='icon'
          />
          <link
            href='assets/pixabay-icon-filled.png?v=1'
            rel='apple-touch-icon'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta name='description' content='PixaBayFinder' />
          <link href='manifest.json?v=1' rel='manifest' />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
