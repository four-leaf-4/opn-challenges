import styled from 'styled-components';
import { colors } from './colors';

export const PaymentLabelStyled = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0 0 1.5rem;
  cursor: pointer;
  &:after,
  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 50%;
  }
  &:after {
    left: 0;
    margin-top: -10px;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 50%;
  }
  &:before {
    left: 5px;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    background: ${colors.secondary};
    border-radius: 50%;
    opacity: 0;
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
  &:hover:after {
    border-color: ${colors.secondary};
  }
`;
