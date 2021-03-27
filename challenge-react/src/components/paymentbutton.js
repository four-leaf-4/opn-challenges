import React, { useContext } from 'react';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';
import { postPayments, getTotalDonate } from '../apis/index';
import { StoreContext } from '../context/';

const PaymentButton = () => {
  const { dispatch } = useContext(StoreContext);
  const { selectedAmount } = useContext(AmountContext);
  const { selectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId } = useContext(CharitiesIdContext);

  const handlePay = () => {
    postPayments(selectedAmount, selectedCurrency, selectedCharitiesId)
      .then(() => {
        getTotalDonate(dispatch);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <button onClick={handlePay}>Pay</button>
    </>
  );
};

export default PaymentButton;
