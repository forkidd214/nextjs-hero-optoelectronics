import { useRouter } from 'next/router';
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react';

import ProductCategory from './ProductCategory';

export default function ProductCategories({ productCategories }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  return (
    <Stack mb={14}>
      <Heading size="lg" fontWeight="normal" align="center" mb={10}>
        {locale === defaultLocale ? 'Product Categories' : '产品系列'}
      </Heading>

      <SimpleGrid columns={[1, 2, 4]} spacing={5}>
        {productCategories.map((productCategory) => (
          <ProductCategory
            key={productCategory.id}
            productCategory={productCategory.attributes}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
