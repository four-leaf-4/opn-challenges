import React, { useState } from 'react';

export const CurrencyContext = React.createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(10);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
