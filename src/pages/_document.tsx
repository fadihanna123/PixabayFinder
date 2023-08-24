import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';
import { toast } from 'react-toastify';

const { NEXT_PUBLIC_PIXABAY_KEY } = process.env;

if (!NEXT_PUBLIC_PIXABAY_KEY) {
  toast.error('Missing apiKey? Add it and restart the app!');
  throw new Error('Missing apiKey? Add it and restart the app!');
}

const Document: NextPage = () => (
  <Html>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
