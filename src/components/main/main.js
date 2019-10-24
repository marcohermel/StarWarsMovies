import React, { useEffect, useState } from 'react';
import { getFilms } from '../../services/apiService';
import Panel from '../panel';
import './main.scss';
import FilmLink from '../filmLink/filmLink';
import Loader from '../loader';

export default function Main() {
  const [films, setFilms] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getFilms().then((resp) => {
      const sortedFilms = resp.results.sort((a, b) => a.episode_id - b.episode_id);
      setFilms(sortedFilms);
      setLoad(false);
    });
  }, []);

  return (
    <main>
      {load ? <Loader />
        : (
          <Panel title="Star wars" flexRow fontHeaderJedi>
            {films.map((film) => <FilmLink key={film.episode_id} film={film} />)}
          </Panel>
        )}
    </main>
  );
}
