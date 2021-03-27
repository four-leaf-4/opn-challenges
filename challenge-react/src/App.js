import React, { useContext } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

import {
  StoreContext,
  AmountContext,
  CharitiesContext,
  CurrencyContext,
  CharitiesIdContext,
} from './index';

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const SectionCard = styled.div`
  display: flex;
`;

const Message = styled.p`
color: 'red',
margin: '1em 0',
fontWeight: 'bold',
fontSize: '16px',
textAlign: 'center',
`;

const App = () => {
  const { state } = useContext(StoreContext);
  const { donate, message } = state;

  return (
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <Message>{message}</Message>
      <Cards />
    </div>
  );
};

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

const OneOfCard = ({ item }) => {
  const { id, name, currency } = item;

  const { selectedAmount } = useContext(AmountContext);
  const { selectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId } = useContext(CharitiesIdContext);

  const handlePay = () => {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{ "charitiesId": ${selectedCharitiesId}, "amount": ${selectedAmount}, "currency": "${selectedCurrency}" }`,
    });
  };

  return (
    <Card>
      <p>{name}</p>
      <Payments id={id} currency={currency} />
      <button onClick={handlePay}>Pay</button>
    </Card>
  );
};

const Cards = () => {
  const { charities } = useContext(CharitiesContext);
  const cards = charities.map((item, i) => <OneOfCard key={i} item={item} />);

  return <SectionCard>{cards}</SectionCard>;
};

export default App;

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
