import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Stack,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from '@chakra-ui/react';
import DesktopSubNav from './DesktopSubNav';

const Link = React.forwardRef(({ href, children, ...rest }, ref) => (
  <NextLink href={href} passHref>
    <ChakraLink ref={ref} {...rest}>
      {children}
    </ChakraLink>
  </NextLink>
));

export default function DesktopNav({ navItems }) {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={10}>
      {navItems.map((navItem, index) => (
        <Box key={index}>
          <Popover id={navItem.id} trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.navHead.href}
                // href={navItem.itemHead.href ?? '#'}
                p={2}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.navHead.label}
              </Link>
            </PopoverTrigger>

            {navItem.subNavs && navItem.subNavs.data.length > 0 && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.subNavs.data.map((subNav) => (
                    <DesktopSubNav key={subNav.id} {...subNav.attributes} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}
