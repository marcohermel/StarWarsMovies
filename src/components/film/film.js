import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getFilm } from '../../services/filmService';
import Panel from '../panel';
import './film.scss';
import Information from '../information';
import { romanize, formatDate } from '../../common/formater';
import { LoaderContext } from '../../context/loaderContext';

export default function Film({ match }) {
  const [film, setFilm] = useState({});
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    async function loadFilm() {
      const filmDetails = await getFilm(match.params.id);

      setFilm(filmDetails);
      loaderContext.setLoading(false);
    }
    loaderContext.setLoading(true);
    loadFilm();
  }, [match.params.id]);

  return (loaderContext.isLoading ? null
    : (
      <Panel title={film.title} alignStart>
        <Information title="Opening Craw" content={film.opening_crawl} />
        <Information title="Episode" content={romanize(film.episode_id)} />
        <Information title="Director" content={film.director} />
        <Information title=" Producer" content={film.producer} />
        <Information title="Release date" content={formatDate(film.release_date)} />
        <Link className="return" to="/">Return</Link>
      </Panel>
    )
  );
}


Film.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
