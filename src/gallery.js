// gallery.js

import axios from 'axios';
import apiMovie from './api-movie.js';
import { getMovieGenres } from './api-genres.js';
import { createMovieCard } from './markup.js';
import { openModal } from './modal.js';
import { createPaginationButtons } from './pagination.js';

let currentPage = 1;


function attachCardClickListener(movieCard, movieId) {
  movieCard.addEventListener('click', () => {
    openModal(movieId); 
  });
}


function removeCardClickListener(movieCard) {
  movieCard.removeEventListener('click', openModal);
}


async function displayMoviesByPage(page) {
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = ''; 

  try {
    const movies = await getMoviesFromApi(page);
    const genres = await getMovieGenres(); 

    
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(movieCard => {
      removeCardClickListener(movieCard);
      movieCard.remove();
    });

    movies.forEach(movie => {
      const movieCard = createMovieCard(movie, genres);
      movieContainer.appendChild(movieCard);
      attachCardClickListener(movieCard, movie.id);
    });
  } catch (error) {
    console.error(
      'There was a problem displaying movies for page:',
      page,
      error
    );
  }
}


async function getMoviesFromApi(page) {
  try {
    const apiMoviePage = {
      ...apiMovie,
      url: `${apiMovie.url}&page=${page}`, 
    };

    const response = await axios.request(apiMoviePage);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    return response.data.results;
  } catch (error) {
    console.error('There was a problem fetching movies for page:', page, error);
    return [];
  }
}


async function updatePaginationAndDisplay(page) {
  try {
    currentPage = page;
    await displayMoviesByPage(currentPage);


    createPaginationButtons(currentPage, updatePaginationAndDisplay);
  } catch (error) {
    console.error('There was a problem updating pagination:', error);
  }
}


updatePaginationAndDisplay(currentPage);
