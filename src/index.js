import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoaderContextProvider from './context/loaderContext';

ReactDOM.render(
  <LoaderContextProvider>
    <App />
  </LoaderContextProvider>,
  document.getElementById('root'),
);
