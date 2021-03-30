import React from 'react';
import { Cardstyled, CardName, Picturestyled, Imgstyled } from '../styled/';
import Payments from './payments';
import DonateButton from './donatebutton';
import { PaymentsContextProvider } from '../context/';

const OneOfCard = ({ item }) => {
  const { id, name, currency, image } = item;

  return (
    <PaymentsContextProvider>
      <Cardstyled>
        <Picturestyled>
          <Imgstyled
            src={`images/${image}`}
            width={400}
            height={200}
            alt={name}
          />
        </Picturestyled>
        <CardName>{name}</CardName>
        <DonateButton />
        <Payments id={id} currency={currency} />
      </Cardstyled>
    </PaymentsContextProvider>
  );
};

export default OneOfCard;
