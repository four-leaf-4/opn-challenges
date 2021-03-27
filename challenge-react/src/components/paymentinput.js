import React, { useContext } from 'react';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';

export const PaymentInput = ({ id, currency, amount }) => {
  const { setSelectedAmount } = useContext(AmountContext);
  const { setSelectedCurrency } = useContext(CurrencyContext);
  const { setSelectedCharitiesId } = useContext(CharitiesIdContext);
  const clickPayment = (e) => {
    const { value } = e.target;
    setSelectedAmount(parseInt(value));
    setSelectedCurrency(currency);
    setSelectedCharitiesId(parseInt(id));
  };
  return (
    <>
      <label>
        <input
          type="radio"
          name="payment"
          value={amount}
          onClick={clickPayment}
        />
        {amount}
      </label>
    </>
  );
};

export default PaymentInput;
