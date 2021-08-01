import { NavLink, useParams, useRouteMatch, Route, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { fetchMovieInfo } from '../../services/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import defaultImage from '../../image/defaultImg.png'
import css from './MovieDetailsPage.module.css'



export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const routerState = useRef(null);
    const location = useLocation();
    const history = useHistory();
    
    useEffect(() => {
        if (routerState.current) return; 
        routerState.current = location.state;
    }, [location.state])

    useEffect(() => {
        fetchMovieInfo(movieId).then(setMovie)
    }, [movieId]);

    const handleGoBack = () => {
        const url = routerState.current ? `/?${routerState.current?.params}` : '/movies'
        history.push(url) 
    }
    

    return (
        <>
            <button type="button" className={css.backBtn}
                onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Go back
            </button>
        {(movie) && <>
          <div className={css.movieInfo}>
            <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : defaultImage} alt={movie.title} className={css.movieInfoImg}/>
          <div>
                <h2>{movie.title} ({movie.release_date.substring(0, 4)})</h2>
                <p>User Score {movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul className={css.genres}>
                    {movie.genres.map(genre => { return <li key={genre.id}>{genre.name}</li> })}
                </ul>
          </div>
          </div>
                 <hr />
                <ul>Additional information
                    <li>
                        <NavLink to={`${url}/cast`} className={css.infoLink}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/reviews`} className={css.infoLink}>Reviews</NavLink>
                    </li>
                </ul>
          <hr />
            </>}
             <Route path={`${path}/cast`}>
                {movie && <Cast movieId={movie.id} />}
            </Route>

             <Route path={`${path}/reviews`}>
                {movie && <Reviews movieId={movie.id} />}
             </Route>
        </>
    )
 }