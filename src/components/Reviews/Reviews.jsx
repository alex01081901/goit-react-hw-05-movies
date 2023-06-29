import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function movieReviews() {
      // setLoader(true);
      const movieInfoReviews = await getMovieReviews(movieId);
      setReviews(movieInfoReviews.results);
      // setLoader(false);
    }
    movieReviews();
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul className={css.reviews_list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p className={css.reviews_list__author}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

export default Reviews;