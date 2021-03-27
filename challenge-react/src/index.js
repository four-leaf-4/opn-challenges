import React, { useReducer, useState, useEffect, useContext } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { summaryDonations } from './helpers';

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
      <CharitiesContextProvider>
        <App />
      </CharitiesContextProvider>
    </AmountContextProvider>
  </StoreContextProvider>,
  document.getElementById('root')
);
