import { Text, Box, Flex, Button, Link, Divider } from '@chakra-ui/core';

const ShortTimeLinkItem = ({ link }) => {
  return (
    <Flex px="1rem" flexDirection="column">
      <Box
        as={Flex}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        py="0.5rem"
      >
        <Text>{link.originalLink}</Text>
        <Box>
          <Link href="/" color="#938040">
            {link.shortenedLink}
          </Link>
          <Button
            backgroundColor="rgba(255, 220, 100, 0.31)"
            color="#938040"
            _hover="transparent"
            ml="1rem"
            rounded="5px"
          >
            Copy
          </Button>
        </Box>
      </Box>
      <Divider height="1px" />
    </Flex>
  );
};

export default ShortTimeLinkItem;
