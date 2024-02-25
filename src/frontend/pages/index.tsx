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
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ShortTimeLinkItem from '../component/ShortTimeLinkItem';
import SignInModal from '../component/SignInModal';
import SignUpModal from '../component/SignUpModal';
import QRContainer from 'component/QRCodeContainer'
import useGenerateLink from 'hooks/links/useGenerateLink';

const links = [
  {
    bee_id: "3gpB8O9",
    name: "Godaddy UK",
    original_url: "https://uk.godaddy.com",
    expires_at: "",
    last_visited_at: "",
    created_at: "",
    updated_at: "",
    owner: null
  },
  {
    bee_id: "3gpB8O9",
    name: "Chakra UI",
    original_url: "https://chakra-ui.com",
    expires_at: "",
    last_visited_at: "",
    created_at: "",
    updated_at: "",
    owner: null
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

  const [originalLink, setOriginalLink] = React.useState("")
  const [tabIndex, setTabIndex] = React.useState(1)

  const [generateLinkFn, { data, loading, error }] = useGenerateLink()

  const handleGenerateLink = async ()=>{
    if(originalLink.length >= 5) {
      await generateLinkFn({ variables: { url:  originalLink }})
    }
  }

  return (
    <>
      <Head>
        <title>Links.Bee - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box backgroundColor="#F9ED43" height="100vh" px="7rem" py="2rem">
        <Stack maxWidth="2100px" margin="auto" flexDirection="column"  height="100%" >
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
          <Flex direction={"column"} maxW="47rem" margin="0 auto" marginTop="10rem">
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
                <RadioGroup 
                  as={Flex}
                  className="tabs"  
                  onChange={(nextValue)=>setTabIndex(Number(nextValue))} 
                  value={tabIndex.toString()}
                >
                  <Radio value="1" width="50%">URL Shortener</Radio>
                  <Radio value="2" width="50%">QR Code</Radio>
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
                w="30rem"
              >
                <Input
                  placeholder={ tabIndex === 1 ? "Shorten your link" : "Enter a url"}
                  border="0px solid transparent"
                  focusBorderColor="transparent"
                  _focus={{ border: '0px solid transparent', outline: 0 }}
                  onChange={(e)=>setOriginalLink(e.target.value)}
                />
                <Button
                  backgroundColor="transparent"
                  color="#1F75EB"
                  _hover={{ backgroundColor: 'transparent', outline: 0, border: 0, color: "#0C64DE" }}
                  _focus={{ backgroundColor: 'transparent', outline: 0, border: 0  }}
                  isDisabled={originalLink.length <= 5}
                  onClick={handleGenerateLink}
                >
                  { tabIndex == 1 ? "Shorten" : "Generate"}
                </Button>
              </Flex>
              <Flex direction="column" w="30rem">
                  <Text fontSize={12} px={4} fontWeight="medium" textAlign="center" opacity={0.8}>
                    *** Sign up now for extended link lifespans! Note: Unregistered links expire after 7 days.
                  </Text>
              </Flex>

              {/* 
                {
                  tabIndex === 1 ? (
                    <>
                    {
                      links.map((link, index) => (
                        <ShortTimeLinkItem key={index} link={link} />
                      ))
                    }
                  </>
                  ) : (
                    <QRContainer/>
                  )
                }
              </Flex> */}
            </Stack>
          </Flex>
        </Stack>
        {/* <Flex justifyContent="space-between" pt="-4rem">
          <Link fontWeight={600}>About Links.Bee</Link>
          <Link fontWeight={600}>Contacts.</Link>
          <Link fontWeight={600}>Pricing.</Link>
          <Link fontWeight={600}>use API.</Link>
          <Link fontWeight={600}>Term of Use</Link>
        </Flex> */}
      </Box>
      <SignInModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </>
  );
};

export default Home;
