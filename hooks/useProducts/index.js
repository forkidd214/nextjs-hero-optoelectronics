import { useQuery } from 'react-query';
import { fetchAPI } from '../../lib/strapi';

const QUERY_KEY_PRODUCTS = 'products';

const fetchProducts = async (locale = 'en-US') => {
  return fetchAPI('/products?populate=*', locale);
};

const useProducts = (locale) => {
  return useQuery(QUERY_KEY_PRODUCTS, () => fetchProducts(locale), {
    // refetchOnWindowFocus: false,
    // retry: false,
  });
};

export { QUERY_KEY_PRODUCTS, useProducts, fetchProducts };
