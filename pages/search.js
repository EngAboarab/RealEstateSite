import { Flex, HStack, Text, VStack, Box, Icon } from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';
//to get the query parameters
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Property from '../Components/property';
import { baseUrl, fetchApi } from '../utils/api';
import { useState } from 'react';
import SearchFilters from '../Components/searchFilters';
//since the fetched data shall be filtered by user ,will use getServerProps

export const getServerSideProps = async ({ query }) => {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';
  const data = await fetchApi(
    // `${baseUrl}/properties/list?purpose=${purpose}&priceMin=${minPrice}&priceMax=${maxPrice}`
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  // const dataConv = JSON.parse(data);
  return {
    props: {
      properties: data.hits,
    },
  };
};

const Search = ({ properties }) => {
  const { query } = useRouter();
  const [showFilters, setShowFilters] = useState(true);
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Box
        w="full"
        bg="gray.200"
        borderBottom="1px"
        borderBottomColor="gray.300"
        m={2}
        py={1}
        onClick={() => setShowFilters(!showFilters)}
      >
        <HStack justifyContent="center">
          <Text fontWeight="bold">Search Properties with Filters</Text>
          <FiFilter w={12} />
        </HStack>
      </Box>

      <Box p={2} w="full">
        {showFilters && <SearchFilters />}
      </Box>
      {/* the portion of the search results show */}
      {/* <Box>
        <Text textAlign="start">
          Search Results for {query === undefined ? 'All' : `${query.purpose}`}
        </Text>
      </Box> */}

      {properties.length === 0 && (
        <Image
          src="/images/noResult.png"
          alt="no result"
          height={300}
          width={300}
        />
      )}
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.externalId} />
        ))}
      </Flex>
    </Flex>
  );
};
export default Search;
