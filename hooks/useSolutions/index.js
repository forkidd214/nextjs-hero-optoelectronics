import { useQuery } from 'react-query';
import { fetchAPI } from '../../lib/strapi';

const QUERY_KEY_SOLUTIONS = 'solutions';

const fetchSolutions = async (locale = 'en-US') => {
  return fetchAPI('/solutions?populate=*', locale);
};

const useSolutions = (locale) => {
  return useQuery(QUERY_KEY_SOLUTIONS, () => fetchSolutions(locale), {
    // refetchOnWindowFocus: false,
    // retry: false,
  });
};

export { QUERY_KEY_SOLUTIONS, useSolutions, fetchSolutions };
