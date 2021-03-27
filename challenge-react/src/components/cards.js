import React, { useContext } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { CharitiesContext } from '../context/';
import OneOfCard from './oneofcard';

const SectionCard = styled.div`
  display: flex;
`;

const Cards = () => {
  const { charities } = useContext(CharitiesContext);
  const cards = charities.map((item, i) => <OneOfCard key={i} item={item} />);

  return <SectionCard>{cards}</SectionCard>;
};

export default Cards;
