import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from '../../services/movies-api';
// import css from "./HomePage.module.css";

export default function HomePage() {
  // const {url} = useRouteMatch();
  const [movies, setMovies] = useState([]);
    
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
        <>
        <h1>Trending today</h1>
        {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
            )}
        </>
    )
 }
