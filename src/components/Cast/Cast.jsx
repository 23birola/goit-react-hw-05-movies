import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/movies-api';
import css from './Cast.module.css'
import defaultImage from '../../image/defaultImg.png'

export default function Cast({ movieId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast)
    }, [movieId]);


    return (
        <>
        {(cast.length > 0) && <ul> {
            cast.map(actor => <li key={actor.id}>
                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : defaultImage} className={css.castImg} alt={actor.name} /> 
                    <p>{actor.name}</p>
                    <p>character: {actor.character}</p>
                </li>)
        }
        </ul>}
        </>
    )
}
