import React from 'react';
import {
  Box,
  Image,
    Button,
    Text,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    FormLabel,
    Link,
    FormControl,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/core';

const SignUpModal = ({ isOpen, onClose }) => {
    return (
        <Box rounded="5rem">
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
                <ModalOverlay />
                <ModalContent rounded="0.7rem">
                    <ModalCloseButton border="2px solid black" mt="0.4rem" mr="0.4rem" />
                    <ModalBody
                        backgroundColor="secondary"
                        mt="1rem"
                        px="3rem"
                        pt="2rem"
                        pb="3.5rem"
              roundedBottom="0.7rem"
              alignItems="center"
                    >
                      <Image src="/logo.svg" alt="Links Bee Logo" height="37px" justifySelf="center" mb="3rem" ml="25%"/>

                        <FormControl mb="1rem">
                            <FormLabel fontSize="13px">Full name / Company</FormLabel>
                            <Input
                                type="text"
                                placeholder="Full Name"
                                border="1px solid black"
                                fontSize="13px"
                                _focus={{ border: '1px solid #1F1F1F' }}
                            />
                        </FormControl>
                        <FormControl mb="1rem">
                            <FormLabel fontSize="13px">Email Address</FormLabel>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                border="1px solid black"
                                fontSize="13px"
                                _focus={{ border: '1px solid #1F1F1F' }}
                            />
                        </FormControl>

                        <FormControl mb="1.3rem">
                            <FormLabel fontSize="13px">Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="Password"
                                fontSize="13px"
                                _focus={{ border: '1px solid #1F1F1F' }}
                            />
                        </FormControl>
                        <Button
                            color="black"
                            width="100%"
                            backgroundColor="#F9ED43"
                            fontSize="13px"
                            mb="1rem"
                            height="2.8rem"
                        >
                            Sign Up
                        </Button>
                        <Text fontSize="14px" textAlign="center" mb="1.5rem" mt="1rem">
                            By signing up, You agree to Links.Bee <Link fontWeight="bold">Terms of Service</Link> and{' '}
                            <Link fontWeight="bold">Privacy Policy</Link>
                        </Text>
                        <Text textAlign="center" fontSize="14px">
                            Already have Account?{' '}
                            <Link fontWeight="bold" ml="2px">
                                Log In
                            </Link>
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default SignUpModal;
