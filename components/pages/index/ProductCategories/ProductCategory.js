import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  chakra,
  Box,
  Center,
  Image,
  Flex,
  useColorModeValue,
  Link,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

export default function ProductCategory({ productCategory }) {
  return (
    // <Flex
    //   bg={useColorModeValue('gray.50', 'gray.600')}
    //   rounded="lg"
    //   p={5}
    //   w="full"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    <LinkBox
      w="full"
      // bg={useColorModeValue(null, 'gray.900')}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mx="auto"
      _hover={{
        transform: 'translate3D(0, -1px, 0) scale(1.03)',
        boxShadow: 'lg',
        transition: 'all 0.2s ease-in',
      }}
      transition="all 0.5s ease"
      boxShadow="sm"
    >
      <Center>
        <NextImage
          layer="cover"
          width={productCategory.imageHero.data.attributes.width}
          height={productCategory.imageHero.data.attributes.height}
          // h={56}
          // fit="cover"
          src={productCategory.imageHero.data.attributes.url}
          alt="avatar"
        />
      </Center>

      <Box py={2} textAlign="center">
        <NextLink href={productCategory.link.href} passHref>
          <LinkOverlay
            display="block"
            fontSize="xl"
            color={useColorModeValue('gray.800', 'white')}
            // fontWeight="bold"
          >
            {productCategory.name}
          </LinkOverlay>
        </NextLink>
      </Box>
    </LinkBox>
    // </Flex>
  );
}
