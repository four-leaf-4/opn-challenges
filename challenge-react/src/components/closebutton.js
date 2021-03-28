import React, { useContext } from 'react';
import styled from 'styled-components';
import { PaymentsContext } from '../context/';

const Button = styled.section`
  cursor: pointer;
`;

const CloseButton = () => {
  const { setIsOpen } = useContext(PaymentsContext);
  return (
    <Button
      onClick={() => {
        setIsOpen(false);
      }}
    >
      ✖
    </Button>
  );
};

export default CloseButton;
