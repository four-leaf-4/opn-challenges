import React, { useState, useEffect } from 'react';
import { getcharities } from '../apis/';

export const CharitiesContext = React.createContext();

export const CharitiesContextProvider = ({ children }) => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    getcharities(setCharities);
  }, []);

  return (
    <CharitiesContext.Provider value={{ charities }}>
      {children}
    </CharitiesContext.Provider>
  );
};

export default CharitiesContextProvider;
