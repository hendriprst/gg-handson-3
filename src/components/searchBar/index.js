import { useDispatch } from "react-redux";
import { setSearchQuery, setSearchResults, setLoading } from "../../redux/searchSlice";
import { Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { searchGifs } from "../../api/giphy";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    const newQuery = e.target.value;
    dispatch(setSearchQuery(newQuery));

    if (newQuery.trim() === "") {
      dispatch(setSearchResults([]));
      return;
    }

    dispatch(setLoading(true));
    try {
      const results = await searchGifs(newQuery);
      dispatch(setSearchResults(results));
    } catch (error) {
      console.error('Error searching for GIFs:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Stack align="center" spacing={4} p={8} bg="white" boxShadow="lg" borderRadius="xl">
      <Text fontSize="xl" fontWeight="bold">Search Gifs</Text>
      <form onSubmit={handleSearch} style={{ width: "100%" }}>
        <InputGroup>
          <InputLeftElement children={<SearchIcon color="green.400" />} />
          <Input
            variant="flushed"
            placeholder="Search all the Gifs"
            onChange={handleSearch}
            type="search"
            size="md"
            w="100%"
          />
        </InputGroup>
      </form>
    </Stack>
  );
};

export default SearchBar;
