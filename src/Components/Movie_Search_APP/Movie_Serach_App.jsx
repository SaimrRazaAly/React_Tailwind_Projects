import React, { useState, useEffect } from "react";
// import "./movie.css";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchMovies(query ? SEARCH_API + query : API_URL);
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="movie-grid">
        {movies.map((movie) => {
          return (
            <div className="movie-card" key={movie.id} movie={movie}>
              <img
                src={
                  movie.poster_path
                    ? IMG_PATH + movie.poster_path
                    : "img/image-missing.png"
                }
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span>{movie.vote_average}</span>
              </div>
              <p>{movie.overview}</p>
            </div>
          );
        })}
        {/* //   <MovieCard key={movie.id} movie={movie} /> */}
      </div>
    </div>
  );
};

export default MovieApp;
