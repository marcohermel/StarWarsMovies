import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getFilm } from '../../services/apiService';
import Panel from '../panel';
import './film.scss';
import Information from '../information';
import Loader from '../loader';
import { romanize, formatDate } from '../../common/formater';

export default function Film({ match }) {
  const [film, setFilm] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadFilm() {
      const filmDetails = await getFilm(match.params.id);
      setFilm(filmDetails);
      setLoad(false);
    }
    loadFilm();
  }, [match.params.id]);

  return (
    <main>
      {load
        ? <Loader />
        : (
          <Panel title={film.title} alignStart>
            <Information title="Opening Craw" content={film.opening_crawl} />
            <Information title="Episode" content={romanize(film.episode_id)} />
            <Information title="Director" content={film.director} />
            <Information title=" Producer" content={film.producer} />
            <Information title="Release date" content={formatDate(film.release_date)} />
            <Link className="return" to="/">Return</Link>
          </Panel>
        )}
    </main>
  );
}

Film.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
