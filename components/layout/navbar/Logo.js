import NextLink from 'next/link';
import {
  Link as ChakraLink,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function Logo({ image }) {
  return (
    <NextLink href="/" passHref>
      <ChakraLink
        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
        fontFamily={'heading'}
        color={useColorModeValue('gray.800', 'white')}
        display="block"
        h="inheriet"
        w="140px"
      >
        <Image
          src={image.url}
          alt="Image of logo"
          width={image.width}
          height={image.height}
          layout="responsive"
        />
      </ChakraLink>
    </NextLink>
  );
}
