import { NavLink, useParams, useRouteMatch, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchMovieInfo } from '../../services/movies-api';
import Cast from '../Cast/Cast'

import css from './MovieDetailsPage.module.css'
import Reviews from '../Reviews/Reviews';


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    
    useEffect(() => {
        fetchMovieInfo(movieId).then(setMovie)
    }, [movieId]);

    return (
        <>
            <button type="button">Go back</button>
            {(movie) && <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                <h2>{movie.title} ({movie.release_date.substring(0, 4)})</h2>
                <p>User Score {movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                    {movie.genres.map(genre => { return <li key={genre.id}>{genre.name}</li> })}
                </ul>
                 <hr />
                <ul>Additional information
                    <li>
                        <NavLink to={`${url}/cast`} className={css.infoLink}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/reviews`} className={css.infoLink}>Reviews</NavLink>
                    </li>
                </ul>
            </div>}
             <Route path={`${path}/cast`}>
                {movie && <Cast movieId={movie.id} />}
            </Route>

             <Route path={`${path}/reviews`}>
                {movie && <Reviews movieId={movie.id} />}
             </Route>
        </>
    )
 }