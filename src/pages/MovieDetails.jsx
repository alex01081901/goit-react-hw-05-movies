import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();
  const { title, vote_average, overview, poster_path } = movie;

  useEffect(() => {
    async function movieDetails() {
      // setLoader(true);
      const movieInfo = await getMovieDetails(movieId);
      setMovie(movieInfo);
      setGenres(movieInfo.genres.map(genre => genre.name).join(', '));
      // setLoader(false);
    }
    movieDetails();
  }, [movieId]);
  return (
    <>
      <Link className={css.goback_button} to={backLinkLocationRef.current}>
        Go back
      </Link>
      <div className={css.container}>
        <div className={css.image_thumb}>
          <img
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div className={css.movie_info_container}>
          <h1>{title}</h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <p>Additional information</p>
      <ul className={css.additional_list_links}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;