import React, { useState } from 'react';

export const ThanksMessageContext = React.createContext();

export const ThanksMessageProvider = ({ children }) => {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <ThanksMessageContext.Provider value={{ isDisplay, setIsDisplay }}>
      {children}
    </ThanksMessageContext.Provider>
  );
};

export default ThanksMessageProvider;
