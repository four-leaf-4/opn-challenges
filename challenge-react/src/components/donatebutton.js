import React, { useContext } from 'react';
import { DonateButtonStyled } from '../styled/';
import { PaymentsContext } from '../context/';

const DonateButton = () => {
  const { setIsOpen } = useContext(PaymentsContext);
  return (
    <DonateButtonStyled
      onClick={() => {
        setIsOpen(true);
      }}
    >
      Donate
    </DonateButtonStyled>
  );
};

export default DonateButton;
