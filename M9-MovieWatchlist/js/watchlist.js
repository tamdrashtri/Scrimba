import { getMovieDetails } from './api.js';

const getWatchlist = () => JSON.parse(localStorage.getItem("watchlist")) || [];

export const isInWatchlist = (imdbID) => {
  const watchlist = getWatchlist();
  return watchlist.some((movie) => movie.imdbID === imdbID);
};

export const removeFromWatchlist = (imdbID) => {
  const watchlist = getWatchlist();
  const updatedWatchlist = watchlist.filter((movie) => movie.imdbID !== imdbID);
  localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
};

export const addToWatchlist = async (imdbID) => {
  const watchlist = getWatchlist();
  const movie = await getMovieDetails(imdbID);
  watchlist.push(movie);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};