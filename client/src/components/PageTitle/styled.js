import styled from "styled-components";

export const ProducTitleStyled = styled.div`
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
`;
export const PageTitleWrapper = styled.div`
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const SearchedWordTitle = styled.div`
  font-weight: 400;
  color: #b0b0b0;
`;
export const SearchedWordStyled = styled.div`
  display: flex;
  font-size: 15px;
  line-height: 15px;
  color: #484848;
  margin-top: 5px;
`;
export const SearchedWord = styled.div``;

export const SortButtonStyled = styled.button`
  line-height: 24px;
  font-size: 17px;
  color: #b0b0b0;
  background: white;
  border-radius: 4px;
  height: 48px;
  min-width: 120px;
  border: 1px solid #b0b0b0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
`;

export const DropdownStyled = styled.div`
  position: absolute;
  right: 94px;
  top: 166px;
  background-color: black;
`;
export const DropdownItemStyled = styled.div`
  color: white;
  font-size: 18px;
  width: 100%;
  &:hover {
    background-color: blue;
  }
`;
