import React, { useState, useEffect } from 'react';

export const CharitiesContext = React.createContext();

export const CharitiesContextProvider = ({ children }) => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setCharities(data);
      });
  }, []);

  return (
    <CharitiesContext.Provider value={{ charities }}>
      {children}
    </CharitiesContext.Provider>
  );
};

export default CharitiesContextProvider;
