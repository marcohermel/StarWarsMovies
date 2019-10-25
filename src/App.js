import React from 'react';
import './App.scss';
import Routes from './routes';
import LoaderContextProvider from './context/loaderContext';

function App() {
  return (
    <LoaderContextProvider>
      <Routes />
    </LoaderContextProvider>
  );
}

export default App;
