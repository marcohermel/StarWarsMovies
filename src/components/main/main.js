import React, { useEffect, useState, useContext } from 'react';
import { getFilms } from '../../services/filmService';
import Panel from '../panel';
import './main.scss';
import FilmLink from '../filmLink/filmLink';
import { LoaderContext } from '../../context/loaderContext';


export default function Main() {
  const [films, setFilms] = useState([]);
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext.setLoading(true);
    getFilms().then((resp) => {
      const sortedFilms = resp.results.sort((a, b) => a.episode_id - b.episode_id);
      setFilms(sortedFilms);
      loaderContext.setLoading(false);
    });
  }, []);

  return (loaderContext.isLoading ? null
    : (
      <main>
        <Panel title="Star wars" flexRow fontHeaderJedi>
          {films.map((film) => <FilmLink key={film.episode_id} film={film} />)}
        </Panel>
      </main>
    ));
}
