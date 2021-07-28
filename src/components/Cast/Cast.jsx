import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { fetchMovieCast } from '../../services/movies-api';

export default function Cast() {
    const [cast, setCast] = useState();

    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast)
    }, [movieId]);
    
    return (<>
        {cast && <ul> {
            cast.map(actor => <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.name} />
                    <p>{actor.name}</p>
                    <p>character: {actor.character}</p>
                </li>)
        }
        </ul>}
        </>)
}
