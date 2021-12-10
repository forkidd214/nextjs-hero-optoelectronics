import { useRouter } from 'next/router';

import {
  Stack,
  Heading,
  Box,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import ProductsCarousel from './ProductsCarousel';

export default function Products({ products }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  return (
    <Stack
      mb="14"
      // py={5}
      // left="50%"
      // right="50%"
      // marginLeft="-50vw"
      // marginRight="-50vw"
      width="100vw"
      maxW="100%"
    >
      <Container px={{ base: 50, '2xl': 0 }} minW={'full'}>
        <Heading size="lg" fontWeight="normal" align="center" mb={10}>
          {locale === defaultLocale ? 'Products' : '产品'}
        </Heading>
        <ProductsCarousel slides={products} />
      </Container>
    </Stack>
  );
}
