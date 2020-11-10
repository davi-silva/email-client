import styled from 'styled-components'

export const SearchBarDiv = styled.div`
  display: block;
  @media (max-width: 880px) {
    margin: 0 20px;
  }
`;

export const SearchDiv = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid #d8d8d8;
  border-radius: 7px;
  width: 360px;
  overflow: hidden;
  .icon-input {
    border-right: 1px solid #d8d8d8;
    div {
      position: absolute;
      width: 50px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 23px;
        width: 23px;
      }
    }
  }
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;
  width: 250px;
  height: 42px;
  padding-left: 50px;
  padding-right: 5px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  height: 42px;
  width: 60px;
  border: none;
  background: #f5f5f5;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #f6f8fa;
  }
  img {
    height: 20px;
    width: 20px;
  }
`;