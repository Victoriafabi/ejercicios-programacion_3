import { useState } from "react";
import MovieList from "./components/MovieList";

const moviesData = [
  { id: 1, title: "Titanic", genre: "Drama" },
  { id: 2, title: "Avengers: Endgame", genre: "Action" },
  { id: 3, title: "The Notebook", genre: "Romance" },
  { id: 4, title: "The Matrix", genre: "Sci-Fi" },
  { id: 5, title: "Inception", genre: "Sci-Fi" },
];

const App = () => {
  const [movies] = useState(moviesData);

  return (
    <div>
      <h1>🎬 Lista de Películas</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
