import styled from 'styled-components';
import { colors } from './colors';

const ButtonStyled = styled.button`
  display: block;
  cursor: pointer;
  font-size: 1rem;
  background-color: white;
  border: 1px solid blue;
  padding: 0.5rem 2rem;
  border-radius: 5px;
`;

export const PaymentButtonStyled = styled(ButtonStyled)`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: ${(props) => (props.disabled ? 'grey' : colors.secondary)};
  border-color: ${(props) => (props.disabled ? 'grey' : colors.secondary)};
`;

export const DonateButtonStyled = styled(ButtonStyled)`
  color: ${colors.primary};
  border-color: ${colors.primary};
`;

export const CloseButtonStyled = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
`;
