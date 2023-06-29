import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function trendingMovies() {
      // setLoader(true);
      const visibleMovies = await getTrendingMovies();
      setMovies(visibleMovies.results);
      // setLoader(false);
    }
    trendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li className={css.links_list__item} key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;