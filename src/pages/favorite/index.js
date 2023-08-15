// src/FavoriteGIFs.js
import React, { useState, useEffect } from 'react';
import { Container, Heading, Center } from '@chakra-ui/react';
import CardList from '../../components/Gif/cardList';
import Navbar from '../../components/navbar';

const FavoriteGifs = () => {
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteGIFs(favorites)
  }, []);

  const removeFromFavorites = (gifId) => {
    const updatedFavorites = favoriteGIFs.filter((gif) => gif.id !== gifId);
    setFavoriteGIFs(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container maxW="container.lg" mt={8}>
        <Center>
          <Heading size="md" mb={4}>
            Favorite Gifs
          </Heading>
        </Center>
        {favoriteGIFs.map((gif) => (
          <CardList key={gif.id} gif={gif} onRemove={removeFromFavorites} />
        ))}
      </Container>
    </>
  );
};

export default FavoriteGifs;
