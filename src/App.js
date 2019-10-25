import React, { useContext } from 'react';
import './App.scss';
import Routes from './routes';
import Loader from './components/loader/loader';
import { LoaderContext } from './context/loaderContext';

function App() {
  const loaderContext = useContext(LoaderContext);
  return (
    <>
      {loaderContext.isLoading ? <Loader /> : null}
      <Routes />
    </>
  );
}

export default App;
