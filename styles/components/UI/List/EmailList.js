import styled from 'styled-components'

export const MainListContainer = styled.div`
  margin-bottom: 1rem;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  height: 120px;
  width: 120px;
`;

export const Header = styled.div`
  background: #f5f5f5;
  height: 45px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  display: grid;
  grid-template-columns: 1fr 1.5fr 2fr 0.5fr;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 13px;
  }
  .highlight {
    color: #000;
  }
`;

export const HeaderP = styled.p`
  color: #666669;
  font-size: 15px;
  font-weight: 900;
  align-self: center;
  @media (max-width: 880px) {
    font-size: 14px;
  }
  span {
    margin-left: 6px;
    img {
      height: 9px;
      width: 9px;
    }
  }
`;

export const Sep = styled.span`
  width: 1px;
  height: 14px;
  background: #989898;
  margin: 0 10px;
`;

export const MobileHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #f5f5f5;
  height: 45px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
`;

export const MobileHeader = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .highlight {
    color: #000;
  }
`;
