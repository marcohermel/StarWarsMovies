import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LoaderContext } from '../../context/loaderContext';
import './loader.scss';

export default function Loader({ children }) {
  const loaderContext = useContext(LoaderContext);
  return (loaderContext.isLoading ? (
    <div className="loader">
      <div className="loaderAnimation" />
      <span className="loaderText">A long time ago in a galaxy far, far away...</span>
    </div>
  ) : children
  );
}

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
