import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import faixa from '../../assets/faixa.svg';
import { getFilms } from '../../services/apiService';
import Panel from '../panel';
import './main.scss';

export default function Main() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((resp) => {
      setFilms(resp.results);
    });
  });

  return (
    <main>
      <Panel title="STAR WARS MOVIES" flexRow>
        {films.map((film) => (
          <article key={film.episode_id} className="films">
            <img src={logo} className="img100" alt="logo" />
            <img src={faixa} className="img50" alt="faixa" />
            <Link to={`/film/${film.episode_id}`}>
              {film.title}
            </Link>
          </article>
        ))}
      </Panel>
    </main>
  );
}
