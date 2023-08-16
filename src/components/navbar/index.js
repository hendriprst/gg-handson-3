import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav>
      <Flex
        justify="space-between"
        align="center"
        bg="white"
        px={{ base: 4, md: 8, lg: 24}}
        py={4}
        color="black"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
        width="100%"
      >
        <Box>
          <Heading color='green.400' size='md'>
            <Link to="/">GiphyPedia</Link>
          </Heading>
        </Box>
        <Flex align='center'>
          <Box display={{ base: 'none', md: 'block' }}>
            <Button color='green.400' variant='ghost'>
              <Link to='/'>Home</Link>
            </Button>
            <Button color='green.400' variant='ghost'>
              <Link to='/trending'>Trending</Link>
            </Button>
            <Button color='green.400' variant='ghost' disabled>
              <Link to='/favorite'>Favorite</Link>
            </Button>
          </Box>
          <IconButton
            display={{ base: 'block', md: 'none' }}
            icon={<HamburgerIcon />}
            variant='ghost'
            onClick={toggleModal}
          />
        </Flex>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={toggleModal} size='full'>
        <ModalOverlay />
        <ModalContent bg='white' color='green'>
          <ModalCloseButton />
          <ModalBody mt={16}>
            <Flex direction='column' align="center">
            <RouterLink to="/" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                size="lg"
                fontWeight="semibold"
                w="100%"
                h={32}
                mb={2}
              >
                Home
              </Button>
            </RouterLink>
            <RouterLink to="/trending" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                size="lg"
                fontWeight="semibold"
                w="100%"
                h={32}
                mb={2}
              >
                Trending
              </Button>
            </RouterLink>
            <RouterLink to="/favorite" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                size="lg"
                fontWeight="semibold"
                w="100%"
                h={32}
                disabled
              >
                Favorite
              </Button>
            </RouterLink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <hr />
    </nav>
  );
};

export default Navbar;
