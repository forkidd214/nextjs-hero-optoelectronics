import { useQuery } from 'react-query';
import { fetchAPI } from '../../lib/strapi';

const QUERY_KEY_ABOUT = 'about';

const fetchAbout = async (locale = 'en-US') => {
  return fetchAPI('/about?populate=*', locale);
};

const useAbout = (locale) => {
  return useQuery(QUERY_KEY_ABOUT, () => fetchAbout(locale), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export { QUERY_KEY_ABOUT, useAbout, fetchAbout };
