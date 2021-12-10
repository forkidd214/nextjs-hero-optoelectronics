import NextLink from 'next/link';
import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function MobileNavItem({ navHead, subNavs }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        // as={ChakraLink}
        // href={navHead.href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <NextLink href={navHead.href ?? '#'} passHref>
          <ChakraLink
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {navHead.label}
          </ChakraLink>
        </NextLink>
        {subNavs && subNavs.data.length > 0 && (
          <Icon
            onClick={subNavs && subNavs.data.length > 0 && onToggle}
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {subNavs &&
            subNavs.data.length > 0 &&
            subNavs.data.map((subNav) => (
              <NextLink
                key={subNav.id}
                href={subNav.attributes.link.href}
                passHref
              >
                <ChakraLink py={2}>{subNav.attributes.name}</ChakraLink>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
