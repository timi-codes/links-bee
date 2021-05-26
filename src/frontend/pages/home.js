import Head from 'next/head';
import {
  Avatar,
  MenuItem,
  MenuList,
  MenuButton,
  Box,
  Flex,
  Divider,
  Button,
  Menu,
  Link,
  Image,
  Grid,
  Text,
  RadioButtonGroup,
  Heading,
  useDisclosure
} from '@chakra-ui/core';
import LongTimeLinkItem from '../component/LongTimeLinkItem';
import CreateLinkDrawer from '../component/CreateLinkDrawer';

const links = [
  {
    title: 'Health Worker Survey Link',
    shortenedLink: 'https://links.bee/3gpB8O9',
    clicks: 20,
    date: 'APRIL 15'
  },
  {
    title: 'Post COVID-19 survey Link',
    shortenedLink: 'https://links.bee/3gpf8O9',
    clicks: '20,000',
    date: 'JAN 20'
  },
  {
    title: 'Referral Link',
    shortenedLink: 'https://links.bee/3gerB8O9',
    clicks: 200,
    date: '12, JAN 2019'
  }
];

const DetailView = () => {
  return (
    <Box>
      <Flex px="1.5rem" py="1rem" justifyContent="space-between">
        <Box>
          <Heading as="h4" fontSize="17px" color="#333750" fontWeight={500}>
            Health Worker Survey Link
          </Heading>
          <Text fontSize="12px" color="#A3A4AE">
            CREATED APR 17, 1:46 PM
          </Text>
        </Box>
        <Box mt="3px">
          <Button
            backgroundColor="rgba(255, 220, 100, 0.31)"
            color="#938040"
            _hover="transparent"
            ml="1rem"
            rounded="5px"
            fontSize="13px"
          >
            COPY
          </Button>

          <Button
            backgroundColor="rgba(255, 220, 100, 0.31)"
            color="#938040"
            _hover="transparent"
            ml="1rem"
            rounded="5px"
            fontSize="13px"
          >
            SHARE
          </Button>

          <Button
            backgroundColor="rgba(255, 220, 100, 0.31)"
            color="#938040"
            _hover="transparent"
            ml="1rem"
            rounded="5px"
            fontSize="13px"
          >
            EDIT
          </Button>
        </Box>
      </Flex>
      <Divider height="1px" m="0px" opacity="0.4" />
      <Box px="2rem" py="1rem">
        <Text fontSize="13px" color="black" fontWeight={600}>
          🔗 ORIGINAL LINK -{' '}
          <Link href="/" color="#938040" fontSize="14px" fontWeight="normal">
            https://docs.google.com/forms/d/e/1FAIpQLSe7eO3-dx-WnbvAOPHhm8QCauxT8HB-z9p6LHdXZbSv-JDJPA/formResponse
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

const Home = () => {
  const {
    isOpen: isCreateLinkOpen,
    onOpen: onCreateLinkOpen,
    onClose: onCreateLinkClose
  } = useDisclosure();

  return (
    <>
      <Box
        as={Flex}
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor="#F9ED43"
        height="100vh"
      >
        <Head>
          <title>Links.Bee 🐝🐝🐝</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex justifyContent="space-between" px="2rem" py="2rem">
          <Box width="100px" />
          <Image
            src="/logo.svg"
            alt="Links Bee Logo"
            height="40px"
            justifySelf="center"
            ml="10rem"
          />
          <Box as={Flex}>
            <Button
              fontWeight="bold"
              fontSize="14px"
              backgroundColor="#2F82FF"
              color="white"
              width="140px"
              height="2.8rem"
              rounded="15px 0px 15px 0"
              mr="2rem"
              _hover={{ backgroundColor: '#1C71F1' }}
              onClick={onCreateLinkOpen}
            >
              CREATE
            </Button>
            <Menu justifySelf="center">
              <MenuButton
                as={Button}
                rightIcon="triangle-down"
                fontWeight="bold"
                backgroundColor="transparent"
                _hover={{ backgroundColor: 'transparent' }}
                _focus={{ outline: 0, backgroundColor: 'transparent' }}
              >
                <Avatar
                  name="Tejumola David"
                  src="https://bit.ly/sage-adebayok"
                  size="md"
                  showBorder
                  border="4px solid white"
                />
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
          </Box>
        </Flex>
        <Flex direction="column">
          <Box
            as={Grid}
            maxWidth="1050px"
            backgroundColor="white"
            margin="0 auto"
            height="70vh"
            gridTemplateColumns="340px 1fr"
          >
            <Box height="100%" backgroundColor="#F5F7FF">
              <Box px="1rem" py="1.63rem">
                <Text fontWeight="bold" ml="1rem" color="#444966">
                  3 Links
                </Text>
              </Box>
              <Divider height="1px" m="0px" />
              <RadioButtonGroup
                defaultValue={links[0] && links[0].shortenedLink}
                onChange={val => console.log(val)}
              >
                {links.map((link, index) => (
                  <LongTimeLinkItem
                    key={index}
                    value={link.shortenedLink}
                    link={link}
                  />
                ))}
              </RadioButtonGroup>
            </Box>
            <DetailView />
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
      <CreateLinkDrawer isOpen={isCreateLinkOpen} onClose={onCreateLinkClose} />
    </>
  );
};

export default Home;
