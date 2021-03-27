import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../helpers';

export const posthandlePay = (
  selectedAmount,
  selectedCurrency,
  selectedCharitiesId,
  getpayments,
  dispacth
) => {
  fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{ "charitiesId": ${selectedCharitiesId}, "amount": ${selectedAmount}, "currency": "${selectedCurrency}" }`,
  }).then(() => {
    getpayments(dispacth);
  });
};

export const getcharities = (setCharities) => {
  fetch('http://localhost:3001/charities')
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      setCharities(data);
    });
};

export const getpayments = (dispatch) => {
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
};
