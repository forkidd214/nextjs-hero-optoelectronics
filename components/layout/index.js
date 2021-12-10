import { Box, Container } from '@chakra-ui/layout';

import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <Box maxW="1920px" minH="100vh" mx="auto">
      <Navbar />
      <Container
        minH="md"
        minW="full"
        // py={4}
        px={0}
        fontSize="sm"
      >
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
