import Link from 'next/link';
import { HStack, Text, Box } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { FcHome, FcSearch, FcMenu } from 'react-icons/fc';

const Footer = () => {
  return (
    <>
      <Box bgColor="blue.300" mx="auto" mt={10} py={6}>
        <Text textAlign="center" color="white" fontSize={20}>
          {' '}
          @MSACO for real estate 2022{' '}
        </Text>
      </Box>
    </>
  );
};

export default Footer;
