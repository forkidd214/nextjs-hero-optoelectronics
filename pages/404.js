import React from 'react';
import Head from 'next/head';
import Page from '../components/pages/error';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page statusCode={404} />
    </>
  );
}
