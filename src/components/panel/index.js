
import React from 'react';
import './panel.scss';
import PropTypes from 'prop-types';

export default function Panel({
  children,
  title,
  flexRow,
  alignStart,
  fontHeaderJedi,
}) {
  return (
    <div className="panel">
      <header className={fontHeaderJedi ? 'fontJedi' : ''}>
        <h1>{title}</h1>
      </header>
      <div className={`panel-body 
            ${flexRow ? 'flex-row' : ''}
            ${alignStart ? 'alignStart' : ''}
             `}
      >
        {children}
      </div>
    </div>
  );
}

Panel.propTypes = {
  fontHeaderJedi: PropTypes.bool,
  flexRow: PropTypes.bool,
  alignStart: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Panel.defaultProps = {
  title: '',
  flexRow: false,
  alignStart: false,
  fontHeaderJedi: false,
};
