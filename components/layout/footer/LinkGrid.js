import NextLink from 'next/link';
import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import ListHeader from './ListHeader';

export default function LinkGrid({ navItems, ...restProps }) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} {...restProps}>
      {navItems.map((navItem, index) => (
        <Box key={index}>
          <ListHeader href={navItem.navHead.href}>
            {navItem.navHead.label}
          </ListHeader>
          <Stack align={'flex-start'}>
            {navItem.subNavs &&
              navItem.subNavs.data.length > 0 &&
              navItem.subNavs.data.map((subNav) => (
                <NextLink
                  key={subNav.id}
                  href={subNav.attributes.link.href}
                  passHref
                >
                  <Link>{subNav.attributes.name}</Link>
                </NextLink>
              ))}
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
