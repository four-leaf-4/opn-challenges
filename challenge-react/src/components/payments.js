import React, { useContext } from 'react';
import PaymentInputs from './paymentinputs';
import PaymentButton from './paymentbutton';
import CloseButton from './closebutton';
import styled from 'styled-components';
import { PaymentsContext } from '../context/';

const SectionPayments = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Payments = ({ id, currency }) => {
  const { isOpen } = useContext(PaymentsContext);
  const Modal = isOpen ? (
    <SectionPayments>
      <CloseButton />
      <PaymentInputs id={id} currency={currency} />
      <PaymentButton />
    </SectionPayments>
  ) : (
    <></>
  );
  return Modal;
};

export default Payments;
