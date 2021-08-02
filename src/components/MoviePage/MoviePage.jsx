import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchMovies } from '../../services/movies-api';
import toast from "react-hot-toast";


export default function MoviePage() {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') ?? '';

  const handleSubmit = (e) => {
  e.preventDefault();
  const queryInput = e.target.elements.query.value.toLowerCase();
  if (!queryInput.trim()) {
    toast.error("Enter query");
      return;
  }

  if (query === queryInput) {
    return;
  }
    // setQuery(queryInput);
    history.push({ ...location, search: `query=${queryInput}` });
    e.target.elements.query.value = "";
  };

  useEffect(() => {
    if (!query) return;
    fetchMovies(query).then(setMovies);
  }, [query]);



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query"/>
        <button type="submit">Search</button>
      </form>
      {
        movies && <ul>
          {movies.map((movie) => <li key={movie.id}>
            {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
             <Link to={{
    pathname: `${url}/${movie.id}`,
    state: { params: `query=${query}`}
            }}
            >{movie.title}</Link>
          </li>)}
        </ul>
      }
    </>
  )
}