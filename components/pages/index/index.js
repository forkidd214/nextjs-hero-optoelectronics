import Link from 'next/link';
import {
  Box,
  Heading,
  Stack,
  Container,
  SimpleGrid,
  GridItem,
  Square,
  AspectRatio,
  Text,
  Button,
  Flex,
  Spacer,
  useColorMode,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';

import HeroCarousel from './HeroCarousel';
import ProductCategories from './ProductCategories';
import Products from './Products';
import Solutions from './Solutions';
import AboutUs from './AboutUs';

export default function IndexPageComponent({
  heroCarousels,
  productCategories,
  products,
  solutions,
  about,
}) {
  return (
    <Box>
      <HeroCarousel heroCarousels={heroCarousels} />
      <Container minW={{ base: 'full', '2xl': '7xl' }}>
        <ProductCategories productCategories={productCategories} />
        <Products products={products} />
        <Solutions solutions={solutions} />
        <AboutUs about={about} />
      </Container>
    </Box>
  );
}
