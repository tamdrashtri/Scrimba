const url = "http://www.omdbapi.com/?apikey=54f23c24";

const get = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from URL: ${url}. Error: ${error.message}`);
    throw error;
  }
};

export const getMovieDetails = (imdbID) =>
  get(`${url}&i=${imdbID}`);

export const fetchMoviesBySearchTerm = (searchTerm) =>
  get(`${url}&s=${searchTerm}`);