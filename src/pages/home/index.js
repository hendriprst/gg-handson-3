import React, { useState } from "react";
import { Container } from '@chakra-ui/react';
import { searchGifs } from "../../api/giphy";
import SearchBar from "../../components/searchBar";
import CardList from "../../components/Gif/cardList";
import Navbar from "../../components/navbar";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const results = await searchGifs(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for GIFs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container maxW="container.lg" mt={8}>
          <SearchBar onSearch={handleSearch} />
          <CardList gifs={searchResults} loading={loading} />
        </Container>
      </main>
    </>
  );
};

export default Home;
