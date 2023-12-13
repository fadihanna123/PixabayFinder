/* eslint-disable no-console */
// @ts-check
import { Inter } from 'next/font/google';
import ReduxStore from 'redux/ReduxStore';
import './styles/globalStyles';
import './styles';
import 'normalize.css';
import 'sal.js/dist/sal.css';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Flip } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metaData: Metadata = {
  title: 'Pixabay Finder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
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
          href='images/pixabay-icon-filled.png?v=1'
          rel='apple-touch-icon'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='PixaBayFinder' />
      </Head>
      <body className={inter.className}>
        <GlobalStyles />
        <ReduxStore>
          {children}
          <ToastContainer transition={Flip} />
        </ReduxStore>
      </body>
    </html>
  );
}
