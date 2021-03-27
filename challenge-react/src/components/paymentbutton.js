import React, { useContext } from 'react';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';
import { posthandlePay, getpayments } from '../apis/index';
import { StoreContext } from '../context/';

const PaymentButton = () => {
  const { dispatch } = useContext(StoreContext);
  const { selectedAmount } = useContext(AmountContext);
  const { selectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId } = useContext(CharitiesIdContext);

  const handlePay = () => {
    posthandlePay(
      selectedAmount,
      selectedCurrency,
      selectedCharitiesId,
      getpayments,
      dispatch
    );
  };

  return (
    <>
      <button onClick={handlePay}>Pay</button>
    </>
  );
};

export default PaymentButton;
