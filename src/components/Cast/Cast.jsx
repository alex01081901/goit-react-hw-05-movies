import { useEffect, useState } from 'react';
import { getMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function movieCast() {
      // setLoader(true);
      const movieInfoCast = await getMovieCast(movieId);
      setCast(movieInfoCast.cast);
      // setLoader(false);
    }
    movieCast();
  }, [movieId]);

  return (
    <ul className={css.cast_list}>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            className={css.image}
            src={
              profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;