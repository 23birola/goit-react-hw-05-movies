import { Link, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchMovies } from '../../services/movies-api';
// import css from './MoviePage.module.css'
// import toast, { Toaster } from "react-hot-toast";


export default function MoviePage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  const handleSubmit = (e) => {
  e.preventDefault();
  const queryInput = e.target.elements.query.value.toLowerCase();
  if (!queryInput.trim()) {
    return
    // toast.error("Enter query");
  }

  if (query === queryInput) {
    return;
  }
  setQuery(queryInput);
  // setMovies([]);
  };

  useEffect(() => {
    if (!query) return;

    fetchMovies(query).then(setMovies);
  }, [query]);
  
  // console.log("query", query);
  // console.log("movies", movies);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query"/>
        <button type="submit">Search</button>
      </form>
      {
        movies && <ul>
          {movies.map((movie) => <li key={movie.id}><Link to={`${url}/{movie.id}`}>{movie.title}</Link></li> )}
        </ul>
      }
    </>
  )
}