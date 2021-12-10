import { useRouter } from 'next/router';
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react';

import Solution from './Solution';

export default function Solutions({ solutions }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  return (
    <Stack mb={14}>
      <Heading size="lg" fontWeight="normal" align="center" mb={10}>
        {locale === defaultLocale ? 'Solutions' : '解决方案'}
      </Heading>

      <SimpleGrid columns={[1, 2, 4]} spacing={5}>
        {solutions.map((solution) => (
          <Solution key={solution.id} solution={solution.attributes} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
