import { useQuery } from 'react-query';
import { fetchAPI } from '../../lib/strapi';

const QUERY_KEY_HERO_CAROUSELS = 'hero-carousels';

const fetchHeroCarousels = async (locale) => {
  return fetchAPI('/hero-carousels?populate=*', locale);
};

const useHeroCarousels = (locale) => {
  return useQuery(QUERY_KEY_HERO_CAROUSELS, () => fetchHeroCarousels(locale), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export { QUERY_KEY_HERO_CAROUSELS, useHeroCarousels, fetchHeroCarousels };
