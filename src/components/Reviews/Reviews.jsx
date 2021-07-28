import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-api';

export default function Reviews() {
    const [reviews, setReviews] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews)
    }, [movieId]);
    return (
        <>
            {!reviews ? <p>We don't have reviews for this movie</p> :
             <ul>
                {reviews.map(review => <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>)}
            </ul>
    }
        </>)

    
}