import { useQuery } from 'react-query';
import { fetchAPI } from '../../lib/strapi';

const QUERY_KEY_NAVBAR = 'navbar';

const fetchNavbar = async (locale = 'en-US') => {
  return fetchAPI(
    // '/navbar?populate[dynamicNavItems][populate]=*&populate=logo&populate[navItems][populate]=*',
    '/navbar?',
    locale
  );
};

const useNavbar = (locale) => {
  return useQuery(QUERY_KEY_NAVBAR, () => fetchNavbar(locale), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export { QUERY_KEY_NAVBAR, useNavbar, fetchNavbar };
