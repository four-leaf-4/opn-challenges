import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
} from '../context/';
import Payments from './payments';
import { posthandlePay } from '../apis/index';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const OneOfCard = ({ item }) => {
  const { id, name, currency } = item;
  const { selectedAmount } = useContext(AmountContext);
  const { selectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId } = useContext(CharitiesIdContext);

  const handlePay = () => {
    posthandlePay(selectedAmount, selectedCurrency, selectedCharitiesId);
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
