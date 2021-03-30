import styled from 'styled-components';

export const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  height: 5vh;
  z-index: 1;
  color: palevioletred;
  background-color: #fff;
  border-top: 1px solid palevioletred;
  border-bottom: 1px solid palevioletred;

  animation: fadein-keyframes 1 ease-in 3s;

  @keyframes fadein-keyframes {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
