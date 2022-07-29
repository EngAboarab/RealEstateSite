import {
  Flex,
  Text,
  Image,
  Container,
  HStack,
  VStack,
  Avatar,
  Divider,
  Box,
} from '@chakra-ui/react';
import DefaultImage from '../public/images/DefaultImage.jpeg';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Link from 'next/link';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" p={{ sm: '2', md: '6' }} my={2} cursor="pointer">
        <Container>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            w={400}
            h={200}
            alt="property image"
          />

          <VStack justifyContent="center" alignItems="flex-start">
            <HStack justifyContent="space-between" w="full">
              <HStack color={'green.300'}>
                {isVerified && <GoVerified />}
                <Text fontWeight="bold" color="black">
                  AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
                </Text>
              </HStack>
              <Avatar size="sm" src={agency.logo.url}></Avatar>
            </HStack>
            <HStack color="blue.500">
              <Text color="gray.400" fontSize="sm">
                {rooms}
              </Text>
              <FaBed />

              <Text color="gray.400" fontSize="sm">
                |{baths}
              </Text>
              <FaBath />

              <Text color="gray.400" fontSize="sm">
                |{millify(area)} sqft.
              </Text>
              <BsGridFill />
            </HStack>
            <HStack>
              <Text color="gray.400" fontSize="sm">
                {title.length > 30 ? title.substring(0, 30) + '...' : title}
              </Text>
            </HStack>
          </VStack>
        </Container>
      </Flex>
    </Link>
  );
};
export default Property;
