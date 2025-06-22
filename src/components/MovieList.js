// MovieList.js
import React from 'react';
import { MovieCard } from './components/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movie-list" data-cy="movieList">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
