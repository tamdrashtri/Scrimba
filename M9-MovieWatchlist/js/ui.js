import { isInWatchlist } from './watchlist.js';

export const searchInput = document.querySelector("#search");
export const searchButton = document.querySelector(".search-btn");
export const movieContainer = document.querySelector(".movies-container");


export const createMovieHtml = (movie) => `
  <div class="movies-section">
    <div class="movies-img-div">
      <img class="movies-img" src="${movie.Poster}" alt="" srcset="">
    </div>
    <div class="movies-details">
      <div class="movies-section--title">
        <p class="movie-title">${movie.Title}</p>
        <span class="ratings">
          <i class="fa-solid fa-star" style="color: #FEC654;"></i>
          ${movie.imdbRating}
        </span>
      </div>
      <div class="movie-subinfo">
        <p class="minutes">${movie.Runtime}</p>
        <p class="genre">${movie.Genre}</p>
        <div class="add-watchlist" >
          <button class="add-watchlist-btn" data-imdbid="${movie.imdbID}">
          ${updateWatchlistButton(movie.imdbID)}
          </button>
        </div>
      </div>
      <div>
        <p class="description">${movie.Plot}</p>
      </div>
    </div>
  </div>
`;

export const updateWatchlistButton = (imdbID) => {
  return isInWatchlist(imdbID)
    ? '<i class="fa-solid fa-circle-minus" style="color: #db401a;"></i> Remove'
    : '<i class="fa-solid fa-circle-plus"></i> Watchlist';
};
