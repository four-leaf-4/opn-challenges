import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from './context/';
import Cards from './components/cards';

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

export default App;
