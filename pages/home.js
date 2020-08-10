import Head from 'next/head';
import {
  Avatar,
  MenuItem,
  MenuList,
  MenuButton,
  Box,
  Flex,
  Stack,
  Button,
  Menu,
  Link,
  Image
} from '@chakra-ui/core'
import ShortTimeLinkItem from '../component/ShortTimeLinkItem';


const links = [
  {
    originalLink: "https://uk.godaddy.com",
    shortenedLink: "https://links.bee/3gpB8O9"
  },
  {
    originalLink: "https://chakra-ui.com",
    shortenedLink: "https://links.bee/3gpB8O9"
  }
]

const Home = () => {
  return (
    <Box as={Flex} flexDirection="column" justifyContent="space-between" backgroundColor="#F9ED43" height="100vh">
      <Head>
        <title>Links.Bee - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as={Flex} isInline spacing="1.8rem" flexDirection="row" justifyContent="flex-end" marginRight="2rem" px="1rem" py="2rem">
        <Image src="/logo.svg" alt="Links Bee Logo" width="150px" alignSelf="center"/>
        <Button fontWeight="bold" fontSize="14px" backgroundColor="#416DA9" color="white" width="140px" rounded="12px 0px 12px 0">CREATE</Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon="triangle-down"
              fontWeight="bold"
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              _focus={{ outline: 0, backgroundColor: "transparent" }}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="md" showBorder border="4px solid white"/>
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem as="a" href="#">
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
      </Stack>
      <Flex direction="column">
        <Box as={Flex} flexDirection="column" width="1000px" margin="0 auto" mt="-2rem" backgroundColor="white" height="75vh">

        </Box>
      </Flex>
      <Flex justifyContent="space-between" padding="2.5rem" px="5rem">
        <Link>About Links.Bee</Link>
        <Link>Contacts.</Link>
        <Link>Pricing.</Link>
        <Link>Support.</Link>
        <Link>Term of Use</Link>
      </Flex>
    </Box>
  )
};

export default Home;
