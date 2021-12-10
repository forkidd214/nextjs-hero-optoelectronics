import { Text } from '@chakra-ui/layout';

export default function Copyright(props) {
  return (
    <Text pt={6} fontSize={'sm'} textAlign={'center'} {...props}>
      &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.
    </Text>
  );
}
