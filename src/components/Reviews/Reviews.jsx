import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/movies-api';
import css from './Reviews.module.css'

export default function Reviews({movieId}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews)
    }, [movieId]);
    return (
        <>
            {(reviews.length <= 0) ? <p>We don't have reviews for this movie</p> :
             <ul>
                {reviews.map(review => <li key={review.id}>
                    <p className={css.author}>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>)}
            </ul>
    }
        </>)

    
}