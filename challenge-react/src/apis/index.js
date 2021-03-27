import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../helpers';

export const postPayments = (
  selectedAmount,
  selectedCurrency,
  selectedCharitiesId
) => {
  return fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{ "charitiesId": ${selectedCharitiesId}, "amount": ${selectedAmount}, "currency": "${selectedCurrency}" }`,
  }).then((resp) => {
    if (resp.status >= 400) {
      console.error(resp);
      throw new Error('Bad response from server');
    }
  });
};

export const getCharities = () => {
  return fetch('http://localhost:3001/charities').then((resp) => {
    if (resp.status >= 400) {
      console.error(resp);
      throw new Error('Bad response from server');
    }
    return resp.json();
  });
};

export const getPayments = () => {
  return fetch('http://localhost:3001/payments').then((resp) => {
    if (resp.status >= 400) {
      console.error(resp);
      throw new Error('Bad response from server');
    }
    return resp.json();
  });
};

export const getTotalDonate = (dispatch) => {
  return fetch('http://localhost:3001/payments')
    .then((resp) => {
      if (resp.status >= 400) {
        console.error(resp);
        throw new Error('Bad response from server');
      }
      return resp.json();
    })
    .then((data) => {
      dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        amount: summaryDonations(data.map((item) => item.amount)),
      });
    });
};
