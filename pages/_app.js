import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16.png" />
        <title>Jun Ming</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp