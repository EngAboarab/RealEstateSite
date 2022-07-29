import { Flex, Select, Text, Box } from '@chakra-ui/react';
import { filterData } from '../utils/filterValues';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchFilters = () => {
  const router = useRouter();
  const path = router.pathname;
  const { query } = router;
  const filterUpdate = (e) => {
    e.preventDefault();
    query[e.target.name] = e.target.value;
    router.push({ pathname: path, query: query });
  };
  return (
    <Flex bg="gray.200" flexWrap="wrap">
      {filterData.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            name={filter.queryName}
            onChange={(e) => filterUpdate(e)}
            placeholder={filter.placeholder}
          >
            {filter.items.map((item) => (
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};
export default SearchFilters;
