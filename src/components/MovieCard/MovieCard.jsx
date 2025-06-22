// src/components/MovieCard.js
import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="card" data-cy="movie-card">
      <img src={movie.poster} alt={movie.title} data-cy="movie-poster" />
      <h2 data-cy="movie-title">{movie.title}</h2>
      <p data-cy="movie-year">{movie.year}</p>
    </div>
  );
}

export default MovieCard;
