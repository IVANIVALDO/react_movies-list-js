// MovieCard.js
import React from 'react';

export const MovieCard = ({ movie }) => (
  <div className="box" data-cy="movieCard">
    <h2 className="title is-4">{movie.title}</h2>
    <p>{movie.description}</p>
  </div>
);
