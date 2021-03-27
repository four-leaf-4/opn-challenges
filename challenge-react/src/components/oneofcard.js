import React, { useContext } from 'react';
import styled from 'styled-components';
import Payments from './payments';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const OneOfCard = ({ item }) => {
  const { id, name, currency } = item;

  return (
    <Card>
      <p>{name}</p>
      <Payments id={id} currency={currency} />
    </Card>
  );
};

export default OneOfCard;
