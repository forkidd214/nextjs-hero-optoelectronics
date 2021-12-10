import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AboutUs({ about }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  return (
    <Container maxW={'full'} px={0} mb={10}>
      <Heading size="lg" fontWeight="normal" align="center" mb={10}>
        {locale === defaultLocale ? 'About Us' : '关于我们'}
      </Heading>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={'normal'}
            size={'md'}
            // fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            {about.attributes.title}
          </Heading>
          <Text fontSize={'md'}>{about.attributes.description}</Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <NextLink href={about.attributes.link.href} passHref>
              <Button
                size={'lg'}
                fontWeight={'lg'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}
              >
                {about.attributes.link.label}
              </Button>
            </NextLink>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'full'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <NextImage
              src={about.attributes.imageHero.data.attributes.url}
              width={about.attributes.imageHero.data.attributes.width}
              height={about.attributes.imageHero.data.attributes.height}
              alt={about.attributes.imageHero.data.attributes.alternativeText}
              layout={'responsive'}
              priority
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
