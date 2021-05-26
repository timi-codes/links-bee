import React from 'react';
import { Text, Box, Flex, Image, Button, Link, Divider } from '@chakra-ui/core';

// const SelectionItem = React.forwardRef((props, ref) => {
//   const { isChecked, isDisabled, value, ...rest } = props;
//   return (
//     <Button
//       ref={ref}
//       aria-checked={isChecked}
//       role="radio"
//       isDisabled={isDisabled}
//       {...rest}
//     />
//   );
// });

const LongTimeLinkItem = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, link, ...rest } = props;

  return (
    <>
      <Button
        {...rest}
        ref={ref}
        flexDirection="column"
        role="radio"
        backgroundColor={isChecked ? 'white' : '#F5F7FF'}
        aria-checked={isChecked}
        p="0px"
        m="0px"
        rounded="0px"
        height="5.7rem"
        fontWeight="normal"
        lineHeight="1.4rem"
        _focus={{ backgroundColor: isChecked ? 'white' : '#F5F7FF' }}
        width="100%"
      >
        <Box
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box px="1.5rem" textAlign="left">
            <Text fontWeight={400} color="#444966">
              {link.title}
            </Text>
            <Link href="/" color="#2F82FF" fontSize="14px">
              {link.shortenedLink}
            </Link>
          </Box>
          <Flex
            direction="column"
            justifyContent="space-between"
            px="1rem"
            alignItems="flex-end"
          >
            <Text fontSize="12px" color="#BDC3DA">
              {link.date}
            </Text>
            <Flex mt="1.5rem">
              <Text fontSize="12px" color="#BDC3DA" fontWeight={600}>
                {link.clicks}
              </Text>
              <Image
                src="/stat.svg"
                alt="Links Bee Logo"
                justifySelf="center"
                ml="4px"
              />
            </Flex>
          </Flex>
        </Box>
      </Button>
      <Divider height="0.4px" m="0px" width="100%" />
    </>
  );
});

export default LongTimeLinkItem;
