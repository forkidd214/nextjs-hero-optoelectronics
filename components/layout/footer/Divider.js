import { Flex, useColorModeValue } from '@chakra-ui/react';
import Logo from './Logo';

export default function Divider({ logo, ...restProps }) {
  return (
    <Flex
      align={'center'}
      _before={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        mr: 8,
      }}
      _after={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        ml: 8,
      }}
      {...restProps}
    >
      <Logo image={logo} />
    </Flex>
  );
}
