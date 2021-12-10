import App from 'next/app';
import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import { QUERY_KEY_NAVBAR, fetchNavbar } from '../hooks';
export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  const { dehydratedState, ...restpageProps } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <ChakraProvider>
          <Layout>
            <Component {...restpageProps} />
          </Layout>
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(QUERY_KEY_NAVBAR, () =>
//     fetchNavbar(appContext.router.locale)
//   );

//   return {
//     ...appProps,
//     pageProps: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
