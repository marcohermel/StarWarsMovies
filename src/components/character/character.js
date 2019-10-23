import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

export default function Character({ link }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function loadCharacter() {
      const response = await api.get(link);
      setCharacter(response.data);
    }
    loadCharacter();
  }, [link]);

  return (
    <h3>
      {character.name}
    </h3>
  );
}

Character.propTypes = {
  link: PropTypes.string.isRequired,
};
