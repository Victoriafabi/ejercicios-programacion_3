import React from "react";
import { useState } from "react";
import MovieSearch from "./MovieSearch";

const MovieList = ({ movies }) => {
  const [movieSearch, setMovieSearch] = useState("");
  
  const filteredMovies = movies
  .filter((movie) => movieSearch ? (movie.title.toLowerCase().includes(movieSearch) || movie.genre.toLowerCase().includes(movieSearch)) : movie)
  .map(({ id, title, genre }) => (
    <li key={id}>
      {title} - {genre}
    </li>
  ))

  return (
    <div>
      <MovieSearch movieSearch={movieSearch} setMovieSearch={setMovieSearch} />

      <h2>Películas</h2>
      <ul>
        {filteredMovies.length ? filteredMovies : <p>No se encontró la película.</p>}
      </ul>
    </div>
  );
};

export default MovieList;