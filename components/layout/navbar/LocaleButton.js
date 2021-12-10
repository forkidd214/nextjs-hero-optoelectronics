import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';

export default function LocaleButton() {
  const router = useRouter();
  const { pathname, query, asPath, locales, locale: acticeLocale } = router;
  const inacticeLocale = locales.find((locale) => locale !== acticeLocale);

  return (
    <NextLink
      href={{ pathname, query }}
      as={asPath}
      locale={inacticeLocale}
      passHref
    >
      <Button
        aria-label="Toggle Locale"
        leftIcon={<BsGlobe2 />}
        bg="none"
        rounded="lg"
        px={1}
      >
        | {inacticeLocale}
      </Button>
    </NextLink>
  );
}
