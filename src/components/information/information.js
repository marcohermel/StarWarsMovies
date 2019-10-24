
import React from 'react';
import './information.scss';
import PropTypes from 'prop-types';

export default function Information({ title, content }) {
  return (
    <div className="information">
      <span className="title">{`${title}: `}</span>
      {content}
    </div>
  );
}
Information.defaultProps = {
  title: '',
  content: '',
};
Information.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
