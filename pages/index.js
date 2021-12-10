import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Page from '../components/pages/index';

import { dehydrate, QueryClient } from 'react-query';
import { QUERY_KEY_NAVBAR, fetchNavbar } from '../hooks';
import {
  QUERY_KEY_HERO_CAROUSELS,
  fetchHeroCarousels,
  useHeroCarousels,
  QUERY_KEY_PRODUCT_CATEGORIES,
  useProductCategories,
  fetchProductCategories,
  QUERY_KEY_PRODUCTS,
  useProducts,
  fetchProducts,
  QUERY_KEY_SOLUTIONS,
  useSolutions,
  fetchSolutions,
  QUERY_KEY_ABOUT,
  useAbout,
  fetchAbout,
} from '../hooks';

export default function IndexPage(props) {
  const router = useRouter();
  const {
    data: heroCarousels,
    isLoading: isLoadingHeroCarousels,
    isError: isErrorHeroCarousels,
  } = useHeroCarousels(router.locale);
  const {
    data: productCategories,
    isLoading: isLoadingProductCategories,
    isError: isErrorProductCategories,
  } = useProductCategories(router.locale);
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useProducts(router.locale);
  const {
    data: solutions,
    isLoading: isLoadingSolutions,
    isError: isErrorSolutions,
  } = useSolutions(router.locale);
  const {
    data: about,
    isLoading: isLoadingAbout,
    isError: isErrorAbout,
  } = useAbout(router.locale);

  const isLoading =
    isLoadingHeroCarousels ||
    isLoadingProductCategories ||
    isLoadingProducts ||
    isLoadingSolutions ||
    isLoadingAbout;
  const isError =
    isErrorHeroCarousels ||
    isErrorProductCategories ||
    isErrorProducts ||
    isErrorSolutions ||
    isErrorAbout;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <Page
        heroCarousels={heroCarousels}
        productCategories={productCategories}
        products={products}
        solutions={solutions}
        about={about}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const queryClient = new QueryClient();

  //fetch data for layout
  await queryClient.prefetchQuery(QUERY_KEY_NAVBAR, () =>
    fetchNavbar(context.locale)
  );

  await queryClient.prefetchQuery(QUERY_KEY_HERO_CAROUSELS, () =>
    fetchHeroCarousels(context.locale)
  );
  await queryClient.prefetchQuery(QUERY_KEY_PRODUCT_CATEGORIES, () =>
    fetchProductCategories(context.locale)
  );
  await queryClient.prefetchQuery(QUERY_KEY_PRODUCTS, () =>
    fetchProducts(context.locale)
  );
  await queryClient.prefetchQuery(QUERY_KEY_SOLUTIONS, () =>
    fetchSolutions(context.locale)
  );
  await queryClient.prefetchQuery(QUERY_KEY_ABOUT, () =>
    fetchAbout(context.locale)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
