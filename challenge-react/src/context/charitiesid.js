import React, { useState } from 'react';

export const CharitiesIdContext = React.createContext();

export const CharitiesIdContextProvider = ({ children }) => {
  const [selectedCharitiesId, setSelectedCharitiesId] = useState(0);

  return (
    <CharitiesIdContext.Provider
      value={{ selectedCharitiesId, setSelectedCharitiesId }}
    >
      {children}
    </CharitiesIdContext.Provider>
  );
};

export default CharitiesIdContextProvider;
