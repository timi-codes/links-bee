import Head from 'next/head';
import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Input,
  Link,
  Image,
  Heading,
  useDisclosure
} from '@chakra-ui/react';
import ShortTimeLinkItem from '../component/ShortTimeLinkItem';
import SignInModal from '../component/SignInModal';
import SignUpModal from '../component/SignUpModal';

const links = [
  {
    originalLink: 'https://uk.godaddy.com',
    shortenedLink: 'https://links.bee/3gpB8O9'
  },
  {
    originalLink: 'https://chakra-ui.com',
    shortenedLink: 'https://links.bee/3gpB8O9'
  }
];

const Home = () => {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose
  } = useDisclosure();

  return (
    <>
      <Head>
        <title>Links.Bee - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box 
        backgroundColor="#F9ED43"
        height="100vh"
        
        
      >
        <Stack maxWidth="2100px" margin="auto" flexDirection="column" justifyContent="space-between" height="100%" px="7rem" py="2rem">
          <Stack
            spacing={16}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Image
              src="/logo.svg"
              alt="Links Bee Logo"
              height="40px"
              className="logo"
            />
    
            <Stack direction="row" spacing={6}>
              <Button
                fontWeight="bold"
                backgroundColor="transparent"
                onClick={onLoginOpen}
              >
                Login
              </Button>
              <Button
                fontWeight="bold"
                backgroundColor="transparent"
                onClick={onSignupOpen}
              >
                Signup
              </Button>
            </Stack>
          </Stack>
          <Flex direction={"column"} maxW="45rem" margin="auto"  >
            <Box textAlign="center" mb={8}>
              <Heading fontSize={46} lineHeight="110%">Your Brand's Shortcut to Success</Heading>
              <Text fontSize={16} mt={3} px={16} fontWeight={500} opacity={0.9}>Build and protect your brand using powerful, recognizable short links. With Links.Bee unleash the full potential of your brand with ease. Simplify your online presence and stand out in the digital crowd.</Text>
            </Box>
            <Stack direction="column" margin="0 auto" maxWidth="70%">
            <Box height="3.5rem" backgroundColor="#313131" rounded="10px" mb="1rem"></Box>
              <Flex
                height="3.5rem"
                backgroundColor="white"
                flexDirection="row"
                alignItems="center"
                px="1rem"
              >

                <Input
                  placeholder="Shorten your link"
                  border="0px solid transparent"
                  _focus={{ border: '0px solid transparent' }}
                />
                <Button
                  backgroundColor="transparent"
                  color="#1F75EB"
                  _hover={{ backgroundColor: 'transparent', outline: 0 }}
                  _focus={{ backgroundColor: 'transparent', outline: 0 }}
                >
                  Shorten
                </Button>
              </Flex>
              <Flex direction="column" backgroundColor="white" mt="0.5rem" rounded="10px" px="0.4rem">
              {
                links.map((link) => (
                  <ShortTimeLinkItem link={link} />
                ))
              }
              </Flex>
            </Stack>
          </Flex>
          <Flex justifyContent="space-between">
            <Link fontWeight={600}>About Links.Bee</Link>
            <Link fontWeight={600}>Contacts.</Link>
            <Link fontWeight={600}>Pricing.</Link>
            <Link fontWeight={600}>use API.</Link>
            <Link fontWeight={600}>Term of Use</Link>
          </Flex>
        </Stack>
      </Box>
      <SignInModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </>
  );
};

export default Home;
