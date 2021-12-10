import { Stack, Container } from '@chakra-ui/react';
import Carousel from './Carousel';

export default function HeroCarousel({ heroCarousels }) {
  return (
    <Stack mb={14}>
      <Container p={0} minW="full">
        <Carousel slides={heroCarousels} />
      </Container>
    </Stack>
  );
}
