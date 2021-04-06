
import {
  Box,
  DrawerOverlay,
  Drawer,
    Button,
    Input,
    DrawerFooter,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    useDisclosure,
    FormControl,
  FormLabel,
    Flex
} from '@chakra-ui/core';

const CreateLinkDrawer = ({ isOpen, onClose }) => {

  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shorten a Link</DrawerHeader>

          <DrawerBody mt="2rem">
          <FormControl mb="1.5rem">
            <FormLabel fontSize="13px">Link</FormLabel>
            <Input
                  type="text"
                  placeholder="Original Link"
                  border="1px solid black"
                  fontSize="13px"
                  _focus={{ border: '1px solid #1F1F1F' }}
              />
            </FormControl>

            <FormControl mb="1.5rem">
            <FormLabel fontSize="13px">Duration</FormLabel>
            <Input
                  type="number"
                  placeholder="DD/MM/YYYY"
                  border="1px solid black"
                  fontSize="13px"
                  _focus={{ border: '1px solid #1F1F1F' }}
              />
            </FormControl>
            <Box as={Flex} mt="2rem" justifyContent="flex-end">
              <Button variant="outline" mr={3} onClick={onClose} fontSize="14px">
                Cancel
              </Button>
              <Button color="blue" px="3rem" fontSize="14px" backgroundColor="#F9ED43" _hover={{ backgroundColor: "#E5D925" }}>Create</Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CreateLinkDrawer;
