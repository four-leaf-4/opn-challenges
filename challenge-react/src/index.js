import React from 'react';
import { render } from 'react-dom';
import App from './App';
import StoreContextProvider from './context/store';
import AmountContextProvider from './context/amount';
import CharitiesIdContextProvider from './context/charitiesid';
import CurrencyContextProvider from './context/currency';
import CharitiesContextProvider from './context/charities';

render(
  <StoreContextProvider>
    <AmountContextProvider>
      <CharitiesIdContextProvider>
        <CurrencyContextProvider>
          <CharitiesContextProvider>
            <App />
          </CharitiesContextProvider>
        </CurrencyContextProvider>
      </CharitiesIdContextProvider>
    </AmountContextProvider>
  </StoreContextProvider>,
  document.getElementById('root')
);
