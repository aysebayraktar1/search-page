import styled from "styled-components";

export const BasketStyled = styled.div`
  position: absolute;
  right: 98px;
  top: 72px;
  z-index: 10;
  position: absolute;
  width: 360px;
  height: auto;
  background: #ffffff;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  padding: 28px 0px 0px 28px;
  font-size: 12px;
  line-height: 18px;
`;
export const BasketItemStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const ImageStyled = styled.img`
  width: 50px;
  height: 72px;
`;
export const ProductNameStyled = styled.div``;
export const RemoveButtonStyled = styled.button`
  width: 47px;
  height: 16px;
  color: #f90000;
  border: 1px solid #f90000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  background: white;
  font-size: 10px;
  cursor: pointer;
`;

export const ProductDescStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;
