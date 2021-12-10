import React from 'react';
import Head from 'next/head';
import Page from '../components/pages/error';

export default function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page statusCode={statusCode} />
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};
