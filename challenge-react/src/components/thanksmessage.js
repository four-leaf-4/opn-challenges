import React, { useContext } from 'react';
import { WrapperMessage, Message } from '../styled/';
import { StoreContext, ThanksMessageContext } from '../context/';

const ThanksMessage = () => {
  const { state } = useContext(StoreContext);
  const { message } = state;

  const { isDisplay } = useContext(ThanksMessageContext);
  const MessageText = isDisplay ? <Message>{message}</Message> : <></>;

  return <WrapperMessage>{MessageText}</WrapperMessage>;
};

export default ThanksMessage;
