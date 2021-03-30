import React, { useContext } from 'react';
import { PaymentButtonStyled } from '../styled/';
import {
  AmountContext,
  CharitiesIdContext,
  CurrencyContext,
  PaymentsContext,
} from '../context/';
import { postPayments, getTotalDonate } from '../apis/index';
import { StoreContext, ThanksMessageContext } from '../context/';

const PaymentButton = () => {
  const { dispatch } = useContext(StoreContext);
  const { selectedAmount } = useContext(AmountContext);
  const { selectedCurrency } = useContext(CurrencyContext);
  const { selectedCharitiesId } = useContext(CharitiesIdContext);

  const { setIsDisplay } = useContext(ThanksMessageContext);
  const { setIsOpen } = useContext(PaymentsContext);

  const handlePay = () => {
    postPayments(selectedAmount, selectedCurrency, selectedCharitiesId)
      .then(() => {
        getTotalDonate(dispatch);
      })
      .then(() => {
        dispatch({
          type: 'UPDATE_MESSAGE',
          message: 'Tnank you for your donation',
        });
        setIsDisplay(true);
        setIsOpen(false);
      })
      .then(() => {
        setTimeout(() => {
          setIsDisplay(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const isDisabled = !(selectedAmount > 0 && selectedCharitiesId > 0);
  return (
    <PaymentButtonStyled onClick={handlePay} disabled={isDisabled}>
      Pay
    </PaymentButtonStyled>
  );
};

export default PaymentButton;
