import { useRouter } from 'next/router';

import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';

import LinkGrid from './LinkGrid';
import Divider from './Divider';
import Copyright from './Copyright';
import { useNavbar } from '../../../hooks';

export default function Footer() {
  const router = useRouter();
  const { data, isLoading, isError, error } = useNavbar(router.locale);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      px={8}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <LinkGrid navItems={data.attributes.dynamicNavItems} />
      </Container>
      <Box py={10}>
        <Divider logo={data.attributes.logo.data.attributes} />
        <Copyright />
      </Box>
    </Box>
  );
}
