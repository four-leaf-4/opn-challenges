import React, { useContext } from 'react';
import PaymentInputs from './paymentinputs';
import PaymentButton from './paymentbutton';
import CloseButton from './closebutton';
import { PaymentsContext } from '../context/';
import { SectionPayments, WrapperPaymentInputs } from '../styled/';

const Payments = ({ id, currency }) => {
  const { isOpen } = useContext(PaymentsContext);
  const Modal = isOpen ? (
    <SectionPayments>
      <CloseButton />
      <WrapperPaymentInputs>
        <PaymentInputs id={id} currency={currency} />
        <PaymentButton />
      </WrapperPaymentInputs>
    </SectionPayments>
  ) : (
    <></>
  );
  return Modal;
};

export default Payments;
