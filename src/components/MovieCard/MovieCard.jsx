import React from 'react';

export function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div data-cy="Movie" data-testid="Movie" className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={movie.posterUrl} alt={movie.title} data-cy="MoviePoster" />
        </figure>
      </div>

      <div className="card-content">
        <p data-cy="MovieTitle" data-testid="MovieTitle" className="title is-6">
          {movie.title}
        </p>
        <p data-cy="MovieDescription">{movie.description}</p>
        <a
          data-cy="MovieLink"
          href={movie.imdbUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDb
        </a>
      </div>
    </div>
  );
}
