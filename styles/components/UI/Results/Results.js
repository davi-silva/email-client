import styled from 'styled-components'

export const ResultsP = styled.p`
  margin-top: 1rem;
  color: #666666;
  font-size: 16px;
  font-weight: 900;
  @media (max-width: 880px) {
    margin: 1rem 20px 0px 20px;
  }
  span {
    font-size: 20px;
    margin-left: 3px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #e7e7e7;
  margin-top: 0.6rem;
`;