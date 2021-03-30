import React, { useContext } from 'react';
import { Main } from './styled/';
import { StoreContext } from './context/';
import Cards from './components/cards';
import ThanksMessage from './components/thanksmessage';
import { ThanksMessageProvider } from './context/';

const App = () => {
  const { state } = useContext(StoreContext);
  const { donate } = state;

  return (
    <ThanksMessageProvider>
      <Main>
        <h1>Tamboon React</h1>
        <p>All donations: {donate}</p>
        <ThanksMessage />
        <Cards />
      </Main>
    </ThanksMessageProvider>
  );
};

export default App;
