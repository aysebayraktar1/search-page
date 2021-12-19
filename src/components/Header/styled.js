import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 96px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
  background: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 2048px;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const LogoStyled = styled.img`
  object-fit: contain;
`;
export const SearchStyled = styled.div``;

export const InputStyled = styled.input`
  width: 695px;
  border-radius: 100px;
  background: #eeeeee;
  border: none;
  height: 46px;
  position: relative;
  ::placeholder {
    position: absolute;
    left: 40px;
    top: 18px;
  }
`;
export const SearchImageStyled = styled.img`
  position: absolute;
  z-index: 1000;
  top: 40px;
  padding: 0px 15px;
`;

export const ButtonStyled = styled.button`
  position: relative;
  line-height: 24px;
  font-size: 17px;
  color: #b0b0b0;
  background: white;
  border-radius: 4px;
  height: 48px;
  min-width: 118px;
  border: 1px solid #b0b0b0;
  cursor: pointer;
`;
export const BadgeStyled = styled.div`
  position: absolute;
  right: 94px;
  top: 16px;
  width: 18px;
  height: 18px;
  color: #ffffff;
  background-color: #ff6000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
`;
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
