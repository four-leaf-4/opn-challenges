import React, { useContext } from 'react';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';
import { PaymentLabelStyled, PaymentInputStyled } from '../styled/';

export const PaymentInput = ({ id, currency, amount }) => {
  const { selectedAmount, setSelectedAmount } = useContext(AmountContext);
  const { setSelectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId, setSelectedCharitiesId } = useContext(
    CharitiesIdContext
  );
  const clickPayment = (e) => {
    const { value } = e.target;
    setSelectedAmount(parseInt(value));
    setSelectedCurrency(currency);
    setSelectedCharitiesId(parseInt(id));
  };
  const isChecked = selectedAmount === amount && id === selectedCharitiesId;
  return (
    <PaymentLabelStyled checked={isChecked}>
      <PaymentInputStyled
        id={`id${id}payment${amount}`}
        type="radio"
        name={'payment'}
        value={amount}
        onChange={clickPayment}
        checked={isChecked}
      />
      {amount}
    </PaymentLabelStyled>
  );
};

export default PaymentInput;
