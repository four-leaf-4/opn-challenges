import React, { useContext } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';
import Payments from './payments';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const modulehandlePay = (
  selectedAmount,
  selectedCurrency,
  selectedCharitiesId
) => {
  fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{ "charitiesId": ${selectedCharitiesId}, "amount": ${selectedAmount}, "currency": "${selectedCurrency}" }`,
  });
};

const OneOfCard = ({ item }) => {
  const { id, name, currency } = item;
  const { selectedAmount } = useContext(AmountContext);
  const { selectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId } = useContext(CharitiesIdContext);

  const handlePay = () => {
    modulehandlePay(selectedAmount, selectedCurrency, selectedCharitiesId);
  };

  return (
    <Card>
      <p>{name}</p>
      <Payments id={id} currency={currency} />
      <button onClick={handlePay}>Pay</button>
    </Card>
  );
};

export default OneOfCard;
