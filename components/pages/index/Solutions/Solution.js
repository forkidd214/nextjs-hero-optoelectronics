import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Center,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

export default function Solution({ solution }) {
  return (
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
          width={solution.imageHero.data.attributes.width}
          height={solution.imageHero.data.attributes.height}
          // h={56}
          // fit="cover"
          src={solution.imageHero.data.attributes.url}
          alt="avatar"
        />
      </Center>

      <Box py={2} textAlign="center">
        <NextLink href={solution.link.href} passHref>
          <LinkOverlay
            display="block"
            fontSize="xl"
            color={useColorModeValue('gray.800', 'white')}
            // fontWeight="bold"
          >
            {solution.name}
          </LinkOverlay>
        </NextLink>
      </Box>
    </LinkBox>
  );
}
