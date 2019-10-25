import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const LoaderContext = React.createContext({
  isLoading: true,
  setLoading: () => {},
});

const LoaderContextProvider = ({ children }) => {
  const [isLoadingComponent, setIsLoadingComponent] = useState(true);

  const loadingHandler = (flag) => {
    setIsLoadingComponent(flag);
  };

  return (
    <LoaderContext.Provider
      value={{ setLoading: loadingHandler, isLoading: isLoadingComponent }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
LoaderContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoaderContextProvider;
