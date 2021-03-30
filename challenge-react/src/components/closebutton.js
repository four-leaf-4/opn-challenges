import React, { useContext } from 'react';
import { CloseButtonStyled } from '../styled/';
import { PaymentsContext } from '../context/';

const CloseButton = () => {
  const { setIsOpen } = useContext(PaymentsContext);
  return (
    <CloseButtonStyled
      onClick={() => {
        setIsOpen(false);
      }}
    >
      ✖
    </CloseButtonStyled>
  );
};

export default CloseButton;
