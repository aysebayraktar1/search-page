import styled from "styled-components";
import { down } from "styled-breakpoints";

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
export const SearchStyled = styled.div`
  display: flex;
`;

export const InputStyled = styled.input`
  width: 695px;
  background: #eeeeee;
  border: none;
  height: 46px;
  border-radius: 100px;
  position: relative;
  border-bottom-left-radius: unset;
  border-top-left-radius: unset;
  &:hover,
  &:focus {
    outline: none;
  }

  ${down("sm")} {
    width: 100%;
  }
`;
export const SearchImageStyled = styled.div`
  background: #eeeeee;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 10px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  img {
    z-index: 1000;
  }
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
