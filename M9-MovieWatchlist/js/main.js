import { isInWatchlist, removeFromWatchlist, addToWatchlist } from './watchlist.js';
import { getMovieDetails, fetchMoviesBySearchTerm } from './api.js';
import { searchInput, searchButton, movieContainer, createMovieHtml, updateWatchlistButton } from './ui.js';

const displayMovies = async (searchTerm) => {
  const { Search } = await fetchMoviesBySearchTerm(searchTerm);
  movieContainer.innerHTML = "";
  Search.forEach(async (movie) => {
    const movieDetails = await getMovieDetails(movie.imdbID);
    const html = createMovieHtml(movieDetails);
    movieContainer.insertAdjacentHTML("beforeend", html);
  });
};

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  await displayMovies(searchTerm);
  searchInput.value = "";
});

movieContainer.addEventListener("click", async (e) => {
  if (e.target.closest(".add-watchlist-btn")) {
    e.preventDefault();
    const button = e.target.closest(".add-watchlist-btn");
    const imdbID = button.dataset.imdbid;

    if (isInWatchlist(imdbID)) {
      await removeFromWatchlist(imdbID);
    } else {
      await addToWatchlist(imdbID);
    }

    button.innerHTML = updateWatchlistButton(imdbID);
  }
});
