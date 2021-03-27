import React, { useState } from 'react';

export const AmountContext = React.createContext();

export const AmountContextProvider = ({ children }) => {
  const [selectedAmount, setSelectedAmount] = useState(10);

  return (
    <AmountContext.Provider value={{ selectedAmount, setSelectedAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountContextProvider;
