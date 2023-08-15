import { useEffect, useState } from "react";
import { Container, Spinner, Center, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { getTrendingGifs } from "../../api/giphy";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from "../../components/navbar";
import CardItem from "../../components/Gif/cardItem";

const TrendingGifs = () => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingGIFs = async () => {
      try {
        const gifs = await getTrendingGifs();
        setTrendingGifs(gifs);
      } catch (error) {
        console.error('Error fetching trending GIFs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingGIFs();
  }, []);

  const prevArrow = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingGifs.length - 1 : prevIndex - 1
    );
  };

  const nextArrow = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingGifs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container maxW="container.sm" mt={8}>
        <Center>
          <Heading size="md" pb={4}>
            Trending Gifs
          </Heading>
        </Center>
        
        <ButtonGroup variant="solid" spacing={4} mb={4}>
          <Button leftIcon={<ArrowBackIcon />} onClick={prevArrow}>Prev</Button>
          <Button rightIcon={<ArrowForwardIcon />} onClick={nextArrow}>Next</Button>
        </ButtonGroup>

        <Carousel autoplay interval="2000" infiniteLoop showIndicators={false} selectedItem={currentIndex} showArrows={false}>
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
            trendingGifs.map((gif) => (
              <Center key={gif.id}>
                <CardItem gif={gif} />
              </Center>
            ))
          )}
        </Carousel>
      </Container>
    </>
  );
};

export default TrendingGifs;
