import React, { useContext, useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

import { StoreContext, AmountContext, CharitiesContext } from './index';

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

const Payments = () => {
  const { selectedAmount, setSelectedAmount } = useContext(AmountContext);
  console.log(selectedAmount);
  const clickPayment = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    setSelectedAmount({ selectedAmount: value });
  };

  return [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j}>
      <input
        type="radio"
        name="payment"
        value={selectedAmount}
        onClick={clickPayment}
      />
      {amount}
    </label>
  ));
};

const OneOfCard = ({ item }) => {
  const { name } = item;

  return (
    <Card>
      <p>{name}</p>
      <Payments />
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

const handlePay = (id, amount, currency) => {
  console.log(id);
};
