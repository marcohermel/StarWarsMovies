
import React from 'react';
import './panel.scss';
import PropTypes from 'prop-types';

export default function Panel({ children, title, flexRow }) {
  return (
    <div className="panel">
      <header>
        <h1>{title}</h1>
      </header>
      <div className={flexRow ? 'panel-body-flex-row' : 'panel-body-flex-column'}>
        {children}
      </div>
    </div>
  );
}
Panel.defaultProps = {
  title: '',
  flexRow: false,
};
Panel.propTypes = {
  flexRow: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
