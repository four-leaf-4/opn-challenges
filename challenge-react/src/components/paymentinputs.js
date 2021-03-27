import React, { useContext } from 'react';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';
import PaymentInput from './paymentinput';

export const PaymentInputs = ({ id, currency }) => {
  const donationamountlist = [10, 20, 50, 100, 500];
  const paymentinputs = donationamountlist.map((amount, j) => (
    <PaymentInput key={j} amount={amount} id={id} currency={currency} />
  ));

  return <>{paymentinputs}</>;
};

export default PaymentInputs;
