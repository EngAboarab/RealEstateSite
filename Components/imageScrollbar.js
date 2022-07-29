import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from 'react';
import { Flex, Box, Icon } from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Image from 'next/image';

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { isFirstItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};
const ImageScrollbar = ({ data }) => {
  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box key={item.id}>
            {/* <Image
              src={photo.url}
              width={1000}
              height={500}
              alt="property Image"
              // placeholder="blur"
              // blurDataURL={photo.blurDataURL}
            /> */}
            {/* <Image
              alt="test"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            /> */}
          </Box>
        ))}
      </ScrollMenu>
    </>
  );
};
export default ImageScrollbar;
