import React, { useReducer, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { summaryDonations } from './helpers';
import App from './App';

export const StoreContext = React.createContext();

const initialState = {
  donate: 0,
  message: '',
};

const reducer = (_state, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, _state, {
        message: action.message,
      });
    default:
      return _state;
  }
};

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch('http://localhost:3001/payments')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log(data);
        dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount: summaryDonations(data.map((item) => item.amount)),
        });
      });
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const AmountContext = React.createContext();

export const AmountContextProvider = ({ children }) => {
  const [selectedAmount, setSelectedAmount] = useState(10);

  return (
    <AmountContext.Provider value={{ selectedAmount, setSelectedAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export const CharitiesIdContext = React.createContext();

export const CharitiesIdContextProvider = ({ children }) => {
  const [selectedCharitiesId, setSelectedCharitiesId] = useState(10);

  return (
    <CharitiesIdContext.Provider
      value={{ selectedCharitiesId, setSelectedCharitiesId }}
    >
      {children}
    </CharitiesIdContext.Provider>
  );
};

export const CurrencyContext = React.createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(10);

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const CharitiesContext = React.createContext();

export const CharitiesContextProvider = ({ children }) => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setCharities(data);
      });
  }, []);

  return (
    <CharitiesContext.Provider value={{ charities }}>
      {children}
    </CharitiesContext.Provider>
  );
};

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
