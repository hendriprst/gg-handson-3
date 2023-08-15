import React, { useState } from "react";
import { Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <Stack align="center" spacing={4} p={8} bg="white" boxShadow="lg" borderRadius="xl">
      <Text fontSize="xl" fontWeight="bold">Search GIFs</Text>
      <form onSubmit={handleSearch} style={{ width: "100%" }}>
        <InputGroup>
          <InputLeftElement children={<SearchIcon color="green" />} />
          <Input
            variant="flushed"
            placeholder="Search all the Gifs"
            value={query}
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
