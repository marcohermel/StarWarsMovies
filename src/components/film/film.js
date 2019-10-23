import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Character from '../character';
import { getFilm } from '../../services/apiService';
import Panel from '../panel';
import './film.scss';
import Information from '../information';

export default function Film({ match }) {
  const [film, setFilm] = useState({});

  useEffect(() => {
    async function loadFilm() {
      const filmDetails = await getFilm(match.params.id);
      setFilm(filmDetails);
    }
    loadFilm();
  }, [match.params.id]);

  return (
    <Panel title={film.title}>
      <ul>
        <li>
          <Panel title="Opening Craw">
            {film.opening_crawl}
          </Panel>
        </li>
        <li>
          <Information title="Episode" content={film.episode_id} />
        </li>
        <li>
          <Information title="Director" content={film.director} />
        </li>
        <li>
          <Information title=" Producer" content={film.producer} />
        </li>
        <li>
          <Information title="Release date" content={film.release_date} />
        </li>
      </ul>
      {/* <Panel title="Characters">
        {
         (film.characters)
           ? film.characters.map((link) => <Character key={link} link={link} />)
           : null
      }
      </Panel> */}
    </Panel>
  );
}

Film.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
