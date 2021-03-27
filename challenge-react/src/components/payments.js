import React, { useContext } from 'react';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';

const Payments = ({ id, currency }) => {
  const { setSelectedAmount } = useContext(AmountContext);
  const { setSelectedCurrency } = useContext(CurrencyContext);
  const { setSelectedCharitiesId } = useContext(CharitiesIdContext);
  const clickPayment = (e) => {
    const { value } = e.target;
    setSelectedAmount(parseInt(value));
    setSelectedCurrency(currency);
    setSelectedCharitiesId(parseInt(id));
  };

  return [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j}>
      <input
        type="radio"
        name="payment"
        value={amount}
        onClick={clickPayment}
      />
      {amount}
    </label>
  ));
};

export default Payments;
