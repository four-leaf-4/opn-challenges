import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharitiesContext } from '../context/';
import OneOfCard from './oneofcard';

const SectionCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 960px;
  width: 100%;
  margin: auto;
`;

const Cards = () => {
  const { charities } = useContext(CharitiesContext);
  const cards = charities.map((item, i) => <OneOfCard key={i} item={item} />);

  return <SectionCard>{cards}</SectionCard>;
};

export default Cards;
