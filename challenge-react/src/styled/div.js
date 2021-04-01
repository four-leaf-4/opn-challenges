import styled from 'styled-components';
import { colors } from './colors';

export const WrapperMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const Cardstyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 400px;
  width: 100%;
  margin: 10px;
  padding: 0 0 1.5rem 0;
  border-radius: 5px;
  box-shadow: 1px 1px 8px ${colors.lightgrey};
`;

export const WrapperPaymentInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
`;

export const WrapperInsidePaymentInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;
