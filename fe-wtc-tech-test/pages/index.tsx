import React, { useState, useEffect } from 'react';
import { MoviesList } from '../app/components/moviesList';
import axios from "axios";

interface Movie {
  type: string;
  year: string;
  metascore: string;
  actor: string;
  director: string;
  genre: string;
  watched: string;
  saved: string
}

const defaultMovies:Movie[] = [];



const Home = () => {

  const [movies, setMovies]: [Movie[], (posts: Movie[]) => void] = React.useState(defaultMovies);

  React.useEffect(() => {
    axios
      .get<Movie[]>("http://localhost:3333/api/movies/")
      .then(response => {
        setMovies(response.data);
      })
      .catch(ex => {
        const error =
        ex.response.status === 404
          ? "Resource Not found"
          : "An unexpected error has occurred";
      });
  }, [setMovies]);
  
  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
