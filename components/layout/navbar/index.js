import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
// import { SignInButton, SignUpButton } from './AuthButtons';
import ThemeButton from './ThemeButton';
import LocaleButton from './LocaleButton';
import { useNavbar } from '../../../hooks';

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  const { isOpen, onToggle } = useDisclosure();
  const { data, isLoading, isError, error } = useNavbar(locale);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo image={data.attributes.logo.data.attributes} />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav navItems={data.attributes.dynamicNavItems} />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={0}
        >
          <ThemeButton />
          <LocaleButton />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={data.attributes.dynamicNavItems} />
      </Collapse>
    </Box>
  );
}
