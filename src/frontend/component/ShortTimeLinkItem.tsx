import { Text, Flex, Button, Link, Divider } from '@chakra-ui/react';

type Props = {
  link: ILink
}

const ShortTimeLinkItem : React.FC<Props> = ({ link }) => {
  return (
    <Flex px="0.7rem" flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        py="1.1rem"
      >
        <Text fontWeight={500} fontSize={14} mr={2}>{link.original_url}</Text>
        <>
          <Link href="/" color="#938040" fontSize={14}>
            https://links.bee/{link.bee_id}
          </Link>
          <Button
            backgroundColor="rgba(255, 220, 100, 0.31)"
            color="#938040"
            _hover="transparent"
            ml="1rem"
            fontSize={12}
            borderRadius={20}
            fontWeight={600}
            height={7}
            p={3}
          >
            Copy
          </Button>
        </>
      </Flex>
      <Divider height="1px" />
    </Flex>
  );
};

export default ShortTimeLinkItem;
