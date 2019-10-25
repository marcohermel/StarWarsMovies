import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { romanize } from '../../common/formater';
import logo from '../../assets/logo.svg';
import faixa from '../../assets/faixa.svg';
import './filmLink.scss';

export default function FilmLink({ film }) {
  const id = parseInt(film.url.match(/\d+/g).map(Number), 10);
  return (
    <article className="film">
      <img src={logo} className="img100" alt="logo" />
      <img src={faixa} className="img50" alt="faixa" />
      <Link to={`/film/${id}`}>
        <div className="episode">
                    Episode&nbsp;
          {romanize(film.episode_id)}
        </div>
        <div className="filmTitle">
          {film.title}
        </div>
      </Link>
    </article>
  );
}

FilmLink.propTypes = {
  film: PropTypes.shape({
    episode_id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
