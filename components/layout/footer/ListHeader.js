import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export default function ListHeader(props) {
  return (
    <NextLink {...props} passHref>
      <Link as="h4" fontSize="lg" fontWeight="semibold" mb={2}>
        {props.children}
      </Link>
    </NextLink>
  );
}
