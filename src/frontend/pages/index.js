import React from 'react';
import Head from 'next/head';
import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Input,
  Image,
  Heading,
  useDisclosure,
  Radio,
  RadioGroup,
  Link
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
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

  const [value, setValue] = React.useState('1')

  return (
    <>
      <Head>
        <title>Links.Bee - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box backgroundColor="#F9ED43" height="100vh">
        <Stack maxWidth="2100px" margin="auto" flexDirection="column" justifyContent="space-between" height="100%" px="7rem" py="2rem">
          <Stack
            spacing={16}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Image
              src="/logo.svg"
              alt="Links Bee Logo"
              height="37px"
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
          <Flex direction={"column"} maxW="47rem" margin="auto"  >
            <Box textAlign="center" mb={8}>
              <Heading fontSize={46} lineHeight="110%">Your Brand's Shortcut to Success</Heading>
              <Text fontSize={16} mt={3} px={16} fontWeight={500} opacity={0.9}>Build and protect your brand using powerful, recognizable short links. With Links.Bee unleash the full potential of your brand with ease. Simplify your online presence and stand out in the digital crowd.</Text>
            </Box>
            <Stack direction="column" margin="0 auto" maxWidth="70%">
            <Box 
              className='tabs-container'
              display="grid"
              gridAutoFlow="column"
              gridAutoColumns="2fr 1fr"
              position="relative"
              backgroundColor="#313131" 
              height="3.1rem" 
              rounded="8px" 
              border="6px solid #313131" 
              mb="1rem"
              justifyContent="space-between"
            >
              <RadioGroup className="tabs" as={Flex} onChange={setValue} value={value}>
                <Radio value='1' width="50%">URL Shortener</Radio>
                <Radio value='2' width="50%">QR Code</Radio>
              </RadioGroup>
              <Link 
                href='/bio'
                _hover={{ color: "rgba(255, 255, 255, 0.7)" }}
                isExternal
              >
                <Flex direction="row" alignItems="center" justifyContent="center" height="100%">
                  <Text fontSize="13px">Bio Page </Text>
                  <ExternalLinkIcon ml={2} boxSize={3.5}/>
                </Flex>
              </Link> 
            </Box>
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
                  focusBorderColor="transparent"
                  _focus={{ border: '0px solid transparent', outline: 0, border: 0 }}
                />
                <Button
                  backgroundColor="transparent"
                  color="#1F75EB"
                  _hover={{ backgroundColor: 'transparent', outline: 0, border: 0, color: "#0C64DE" }}
                  _focus={{ backgroundColor: 'transparent', outline: 0, border: 0  }}
                >
                  Shorten
                </Button>
              </Flex>
              <Flex direction="column" backgroundColor="white" mt="0.5rem" rounded="10px" px="0.4rem">
              {
                links.map((link, index) => (
                  <ShortTimeLinkItem key={index} link={link} />
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
