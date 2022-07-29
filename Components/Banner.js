import {
  Flex,
  Image,
  VStack,
  Text,
  Button,
  Link,
  Container,
} from '@chakra-ui/react';

const Banner = ({
  imageUrl,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
}) => {
  return (
    <Container>
      <Flex
        flexDirection={{ sm: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="stetch"
        p={{ sm: '1', md: '2' }}
      >
        <Image src={imageUrl} w={400} h={300} alt="rent Apartment" />
        <VStack
          justifyContent="space-evenly"
          alignItems="flex-start"
          p={{ sm: '0', md: '6' }}
        >
          <Text color="gray.500" fontSize="medium" fontWeight="md">
            {purpose}
          </Text>
          <VStack alignItems="flex-start" spacing={0.1}>
            <Text fontWeight="bold" fontSize="md">
              {title1}
            </Text>
            <Text fontWeight="bold" fontSize="md">
              {title2}
            </Text>
          </VStack>
          <VStack alignItems="flex-start" spacing={0.1}>
            <Text color="gray.500" fontSize="medium">
              {desc1}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {desc2}
            </Text>
          </VStack>
          <Link href={linkName}>
            <Button as="a">{buttonText}</Button>
          </Link>
        </VStack>
      </Flex>
    </Container>
  );
};
export default Banner;
