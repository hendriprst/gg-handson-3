import { Container } from '@chakra-ui/react';
import { useSelector } from "react-redux";
import SearchBar from "../../components/searchBar";
import CardList from "../../components/Gif/cardList";
import Navbar from "../../components/navbar";

const Home = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  const loading = useSelector((state) => state.search.loading);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container maxW="container.lg" mt={24}>
          <SearchBar />
          <CardList gifs={searchResults} loading={loading} />
        </Container>
      </main>
    </>
  );
};

export default Home;
