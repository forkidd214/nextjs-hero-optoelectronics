import Head from 'next/head';
import { Heading } from '@chakra-ui/react';

import { dehydrate, QueryClient } from 'react-query';
import { QUERY_KEY_NAVBAR, fetchNavbar } from '../hooks';

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products Page</title>
      </Head>

      <Heading align="center">Products Page</Heading>
    </>
  );
}

export async function getStaticProps(context) {
  const queryClient = new QueryClient();

  //fetch data for layout
  await queryClient.prefetchQuery(QUERY_KEY_NAVBAR, () =>
    fetchNavbar(context.locale)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
