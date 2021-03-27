import React, { useContext } from 'react';
import PaymentInputs from './paymentinputs';
import PaymentButton from './paymentbutton';

const Payments = ({ id, currency }) => {
  return (
    <>
      <PaymentInputs id={id} currency={currency} />
      <PaymentButton />
    </>
  );
};

export default Payments;
