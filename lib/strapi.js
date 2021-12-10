import axios from 'axios';

export const getStrapiURL = () => {
  return process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
};

export const strapi = axios.create({
  baseURL: getStrapiURL(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAPI = async (path, locale = 'en-US') => {
  const setLocale = locale === 'zh-CN' ? '&locale=zh' : '';

  const res = await strapi.get(`/api${path}${setLocale}`);

  // console.log('strapi...', res.data.data);
  return res?.data?.data;
};

// export const getStrapiURL = (path) => {
//   return `${
//     process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
//   }${path}`;
// };

// /**
//  *
//  * @param {object} params The router params object with slug: { slug: [<slug>] }
//  * @param {string} locale The current locale specified in router.locale
//  * @param {boolean} preview router isPreview value
//  */
// export async function getPageData(params, locale, preview) {
//   const slug = params.slug.join('/');
//   // Find the pages that match this slug
//   const pagesData = await fetchAPI(
//     `/pages?slug=${slug}&_locale=${locale}&status=published${
//       preview ? '&status=draft' : ''
//     }`
//   );

//   // Make sure we found something, otherwise return null
//   if (pagesData == null || pagesData.length === 0) {
//     return null;
//   }

//   // Return the first item since there should only be one result per slug
//   return pagesData[0];
// }

// // Get site data from Strapi (metadata, navbar, footer...)
// export async function getGlobalData(locale) {
//   const global = await fetchAPI(`/global?_locale=${locale}`);
//   return global;
// }
