import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 254px;
  display: flex;
  justify-content: center;
  margin: 0 7px 21px;
  margin-bottom: 21px;
  flex-direction: column;
  cursor: pointer;
`;

export const ImageStyled = styled.div`
  border-radius: 10px;
  padding: 3px 15px 4px;
  border: 1px solid #e5e5e5;
`;

export const ProductDetailStyled = styled.div`
  padding: 0 7px;
`;

export const ProductNameStyled = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  heigt: 50px;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 10px;
`;
export const CategoryStyled = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 18px;
`;
export const CategoryNameStyled = styled.div`
  font-weight: bold;
`;

export const DiscountendPriceStyled = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin-top: 13px;
`;
export const OldPriceStyled = styled.div`
  line-height: 18px;
  display: flex;
`;
export const PriceStyled = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: #9b9b9b;
  text-decoration: line-through;
`;

export const DiscountStyled = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #f90000;
  text-decoration: none;
  margin-left: 5px;
`;

export const BasketButtonStyled = styled.button`
  color: #f90000;
  width: 100%;
  margin-left: 5px;
  border: none;
  background-color: #fff3eb;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
