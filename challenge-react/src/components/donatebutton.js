import React, { useContext } from 'react';
import { PaymentsContext } from '../context/';

const DonateButton = () => {
  const { setIsOpen } = useContext(PaymentsContext);
  return (
    <button
      onClick={() => {
        setIsOpen(true);
      }}
    >
      Donate
    </button>
  );
};

export default DonateButton;
