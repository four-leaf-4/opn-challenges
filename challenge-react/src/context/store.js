import React, { useReducer, useEffect } from 'react';
import { getTotalDonate } from '../apis/';

export const StoreContext = React.createContext();

const initialState = {
  donate: 0,
  message: '',
};

const reducer = (_state, action) => {
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
    getTotalDonate(dispatch).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
