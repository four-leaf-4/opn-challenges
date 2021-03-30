import React, { useContext } from 'react';
import {
  Main,
  SiteTitleName,
  DonatetionDisplay,
  DonateAmount,
} from './styled/';
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
        <SiteTitleName>Tamboon React</SiteTitleName>
        <DonatetionDisplay>
          All donations: <DonateAmount>{donate}</DonateAmount>
        </DonatetionDisplay>
        <ThanksMessage />
        <Cards />
      </Main>
    </ThanksMessageProvider>
  );
};

export default App;
