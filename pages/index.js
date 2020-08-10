import Head from 'next/head';
import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Input,
  Link
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
      <Stack as={Flex} isInline spacing={14} flexDirection="row" justifyContent="flex-end" marginRight="2rem" padding="1rem">
        <Button fontWeight="bold" backgroundColor="transparent">Login</Button>
        <Button fontWeight="bold" backgroundColor="transparent">Signup</Button>
      </Stack>
      <Flex alignItems="center" justifyContent="center" textAlign="center">
        <Box as={Flex} flexDirection="column" width="45%" margin="0 auto" mt="-2rem">
          <img src="/logo.svg" alt="Links Bee Logo" className="logo" />
          <Text fontSize={20} width="75%" margin="1.3rem auto 2rem auto" textAlign="center">Build and protect your brand using powerful, recognizable short links.</Text>
          <Box as={Flex} height="4.5rem" backgroundColor="white" flexDirection="row" alignItems="center" px="1rem">
            <Input
              placeholder="Shorten your link"
              border="0px solid transparent"
              _focus={{ border: "0px solid transparent"}}
              />
            <Button
              backgroundColor="transparent"
              color="#1F75EB"
              _hover={{ backgroundColor: 'transparent', outline: 0 }}
              _focus={{ backgroundColor: 'transparent', outline: 0 }}
            >
              Shorten
            </Button>
          </Box>
          <Box height="9.8rem" backgroundColor="white" mt="1rem" rounded="10px" px="1rem" py="1rem">
            {
              links.map((link) => (
                <ShortTimeLinkItem link={link} />
              ))
            }
          </Box>
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
