import React, { useState, useEffect } from 'react';
import { getCharities } from '../apis/';

export const CharitiesContext = React.createContext();

export const CharitiesContextProvider = ({ children }) => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    getCharities()
      .then((resp) => {
        setCharities(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <CharitiesContext.Provider value={{ charities }}>
      {children}
    </CharitiesContext.Provider>
  );
};

export default CharitiesContextProvider;
