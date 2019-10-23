
import React from 'react';
import './information.scss';
import PropTypes from 'prop-types';

export default function Information({ title, content }) {
  return (
    <>
      <span className="informationTitle">{`${title}: `}</span>
      {content}
    </>
  );
}
Information.defaultProps = {
  title: '',
  content: '',
};
Information.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
