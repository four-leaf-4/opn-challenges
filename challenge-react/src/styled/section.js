import styled from 'styled-components';

export const Main = styled.section`
  position: relative;
`;

export const SectionCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 960px;
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionPayments = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;
