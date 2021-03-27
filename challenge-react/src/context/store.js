import React, { useReducer, useEffect } from 'react';
import { getpayments } from '../apis/';

export const StoreContext = React.createContext();

const initialState = {
  donate: 0,
  message: '',
};

const reducer = (_state, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return Object.assign({}, _state, {
        donate: action.amount,
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
    getpayments(dispatch);
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
