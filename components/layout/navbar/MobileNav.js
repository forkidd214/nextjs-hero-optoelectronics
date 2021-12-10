import { Stack, useColorModeValue } from '@chakra-ui/react';
import MobileNavItem from './MobileNavItem';

export default function MobileNav({ navItems }) {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems.map((navItem, index) => (
        <MobileNavItem key={index} {...navItem} />
      ))}
    </Stack>
  );
}
