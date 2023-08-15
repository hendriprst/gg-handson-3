import React from 'react';
import { Stack, SimpleGrid, Center, Spinner } from '@chakra-ui/react';
import CardItem from './cardItem';

const CardList = ({ gifs, loading }) => {
  return (
    <Stack spacing={4}>
      {loading ? (
        <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='green.500'
            size='xl'
            m={4} 
          />
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4} my={4}>
          {gifs.map((gif) => (
            <CardItem key={gif.id} gif={gif} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default CardList;
