import { useQuery } from 'react-query';
import { fetchAPI } from '../../lib/strapi';

const QUERY_KEY_PRODUCT_CATEGORIES = 'product-categories';

const fetchProductCategories = async (locale = 'en-US') => {
  return fetchAPI('/product-categories?populate=*', locale);
};

const useProductCategories = (locale) => {
  return useQuery(
    QUERY_KEY_PRODUCT_CATEGORIES,
    () => fetchProductCategories(locale),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
};

export {
  QUERY_KEY_PRODUCT_CATEGORIES,
  useProductCategories,
  fetchProductCategories,
};
