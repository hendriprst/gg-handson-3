import React from 'react';
import { Box, Image, Flex, Badge, Heading, Button } from '@chakra-ui/react';
import { DownloadIcon, StarIcon } from '@chakra-ui/icons';

const CardItem = ({ gif, onRemove }) => {
  const handleDownloadClick = () => {
    window.open(gif.images.original.url, '_blank');
  };

  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      w="100%"
      boxShadow='md'
    >
      <Image
        src={gif.images.fixed_height.webp}
        alt={gif.title}
        objectFit='contain'
        height='200px'
        width='100%'
        borderRadius='lg'
      />
      <Box p={4}>
        <Flex
          direction='column'
          justify='space-between'
          h='100%'
        >
          <Box>
            <Badge color='green' fontSize='xs' mb={2}>
              Rating: {gif.rating}
            </Badge>
            <Heading fontSize='md' fontWeight='bold' mb={2} h="64px">
              {gif.title}
            </Heading>
          </Box>
          <Flex direction="row" gap={2}>
            <Button onClick={handleDownloadClick} leftIcon={<DownloadIcon aria-label='Download Gif from original URL' />} type="submit" color="white" bg="green.400" w="100%">
              Download
            </Button>
            <Button
              aria-label="Remove from Favorites"
              color="red.400"
              variant="ghost"
              onClick={() => onRemove(gif.id)}
              disabled
            >
              <StarIcon />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardItem;
