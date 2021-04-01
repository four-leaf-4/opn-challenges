import React, { useContext } from 'react';
import { SectionCard } from '../styled/';
import { CharitiesContext } from '../context/';
import OneOfCard from './oneofcard';

const Cards = () => {
  const { charities } = useContext(CharitiesContext);
  const cards = charities.map((item, i) => <OneOfCard key={i} item={item} />);

  return <SectionCard>{cards}</SectionCard>;
};

export default Cards;
