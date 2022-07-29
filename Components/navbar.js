import Link from 'next/link';
import {
  Menu,
  MenuItem,
  MenuButton,
  HStack,
  Text,
  useMediaQuery,
  Box,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { FcHome, FcSearch, FcMenu, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
// import MenuNavbar from './menuNavbar';
// import LargeNavbar from './largeNavbar';

export const navItems = (icon, name, linkName) => {
  return (
    <>
      <Link href={linkName} passHref>
        <HStack as="a" _hover={{ bgColor: 'blue.500' }} p={2}>
          {icon}
          <Text>{name}</Text>
        </HStack>
      </Link>
    </>
  );
};

export const MenuNavbar = () => {
  return (
    <Menu>
      <MenuButton>
        <FcMenu size={30} />
      </MenuButton>
      <MenuList>
        <MenuItem>{navItems(<FcHome />, 'Home', '/')}</MenuItem>
        <MenuItem>{navItems(<FcSearch />, 'Search', '/search')}</MenuItem>
        <MenuItem>
          {navItems(<FcAbout />, 'Buy Property', '/search?purpose=for-sale')}
        </MenuItem>
        <MenuItem>
          {navItems(<FiKey />, 'Rent Property', '/search?purpose=for-rent')}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export const LargeNavbar = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        {navItems(<FcHome />, 'Home', '/')}
        {navItems(<FcSearch />, 'Search', '/search')}
        {navItems(<FcAbout />, 'Buy Property', '/search?purpose=for-sale')}
        {navItems(<FiKey />, 'Rent Property', '/search?purpose=for-rent')}
      </HStack>
    </>
  );
};
const CustomeNav = () => {
  // set the value of the navbar acc.to the
  //current breakPoint

  const isSmall = useBreakpointValue({
    sm: true,
    md: false,
  });

  return (
    <>
      <Box
        py={1}
        px={5}
        mb={10}
        borderBottom="1px"
        borderBottomColor="gray.400"
      >
        <HStack justifyContent="space-between">
          <Link href="/" passHref>
            <VStack spacing={2}>
              <Text fontSize={36} color="blue.500" fontWeight="bold">
                MSACO
              </Text>
              <Text fontSize={12} color="blue.500">
                for Real Estate
              </Text>
            </VStack>
          </Link>
          {isSmall ? <MenuNavbar /> : <LargeNavbar />}
        </HStack>
      </Box>
    </>
  );
};
export default CustomeNav;
