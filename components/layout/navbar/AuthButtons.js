import { Button } from '@chakra-ui/react';

export const SignInButton = () => {
  return (
    <Button
      as={'a'}
      fontSize={'sm'}
      fontWeight={400}
      variant={'link'}
      href={'#'}
    >
      Sign In
    </Button>
  );
};

export const SignUpButton = () => {
  return (
    <Button
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'red.400'}
      href={'#'}
      _hover={{
        bg: 'pink.300',
      }}
    >
      Sign Up
    </Button>
  );
};
