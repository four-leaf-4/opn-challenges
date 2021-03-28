import React, { useState } from 'react';

export const PaymentsContext = React.createContext();

export const PaymentsContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PaymentsContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PaymentsContext.Provider>
  );
};

export default PaymentsContextProvider;
