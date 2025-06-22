// src/App.js
import React from 'react';
import './App.scss';
import { MovieList } from './components'; // import nomeado, certifique-se que 'components/index.js' exporta MovieList

const moviesFromServer = [
  {
    imdbId: 'tt0111161',
    title: 'The Shawshank Redemption',
    year: 1994,
    poster: 'https://example.com/shawshank.jpg',
  },
  {
    imdbId: 'tt0068646',
    title: 'The Godfather',
    year: 1972,
    poster: 'https://example.com/godfather.jpg',
  },
  // mais filmes...
];

function App() {
  return (
    <div className="App">
      <MovieList movies={moviesFromServer} />
    </div>
  );
}

export default App;
