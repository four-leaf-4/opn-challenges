import React from 'react';
import styled from 'styled-components';
import Payments from './payments';
import DonateButton from './donatebutton';
import { PaymentsContextProvider } from '../context/';

const Card = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  margin: 10px;
  border: 1px solid #ccc;
`;

const CardName = styled.h3`
  text-align: center;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
`;

const OneOfCard = ({ item }) => {
  const { id, name, currency, image } = item;

  return (
    <PaymentsContextProvider>
      <Card>
        <Picture>
          <Img src={`images/${image}`} width={400} height={200} alt={name} />
        </Picture>
        <CardName>{name}</CardName>
        <DonateButton />
        <Payments id={id} currency={currency} />
      </Card>
    </PaymentsContextProvider>
  );
};

export default OneOfCard;
