import React from 'react';
import './loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <div className="loaderAnimation" />
      <span className="loaderText">A long time ago in a galaxy far, far away...</span>
    </div>
  );
}
