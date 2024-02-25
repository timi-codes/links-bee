import {
    Text,
    Box,
    Flex,
    Image,
    Link,
    Divider
  } from '@chakra-ui/react';

const QRContainer = () => {
    return (
      <Flex px="0.7rem" py="1rem">
        <Image src='./qrcode.png' height="6rem"/>
        <Divider width="1px" orientation='vertical' mx={3}/>
        <Flex direction="column" justifyContent="space-between">
          <Box>
            <Text fontWeight={500} fontSize={13} >We've also got you covered with a shortened URL. Let's keep things simple and fun! ☺️</Text>
            <Link href="/" color="#938040" fontSize={14}>
              https://links.bee/3gpB8O9
            </Link>
          </Box>
          <Text fontWeight={500} fontSize={12} color="#089337" lineHeight="110%">Explore more QR Code features when you create and account</Text>
        </Flex>
      </Flex>
    )
}

export default QRContainer;