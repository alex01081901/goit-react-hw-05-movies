import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.searchQuery.value.trim()) {
      setSearchParams({ query: e.target.searchQuery.value.trim() });
    }
  };

  useEffect(() => {
    async function moviesBySearch() {
      // setLoader(true);
      const visibleMovies = await getMoviesBySearch(searchQuery);
      setMovies(visibleMovies.results);
      setQuery('');
      // setLoader(false);
    }
    if (searchQuery) {
      moviesBySearch();
    }
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="searchQuery"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li className={css.links_list__item} key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;