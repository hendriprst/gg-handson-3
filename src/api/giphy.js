import axios from "axios";

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_KEY;
const BASE_URL = "https://api.giphy.com/v1/gifs";
const LIMIT_GIFS = 20;

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error Response:", error.response);
    throw new Error(`API Error: ${error.response.status}`);
  } else if (error.request) {
    console.error("API Error Request:", error.request);
    throw new Error("No response received from the server");
  } else {
    console.error("API Error:", error.message);
    throw new Error("An error occurred while making the API request");
  }
};

export const searchGifs = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?q=${query}&api_key=${GIPHY_API_KEY}&limit=${LIMIT_GIFS}`);
    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getTrendingGifs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending?api_key=${GIPHY_API_KEY}`);
    return response.data.data;
  } catch (error) {
    handleApiError(error);
  }
};
