
import Head from 'next/head';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href={ 'https://fonts.googleapis.com/css2?family=Caladea:wght@400;700&family=Open+Sans:wght@300;400&display=swap' } rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp
