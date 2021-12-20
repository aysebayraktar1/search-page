/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  HeaderWrapper,
  InputStyled,
  SearchImageStyled,
  SearchStyled,
  ButtonStyled,
  HeaderContainer,
  LogoStyled,
  BadgeStyled,
} from "./styled";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import Modal from "../Modal";
import Cart from "../Cart";
import { useStoreState } from "easy-peasy";

const Header = () => {
  const [showBasket, setShowBasket] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState();

  const deleteItem = (item) => {
    setShowBasket(false);
    setItem(item);
    setOpenModal(true);
  };
  const cart = useStoreState((state) => state.cart);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoStyled src={logo} alt="" />
        <SearchStyled>
          <SearchImageStyled src={search} alt="" />
          <InputStyled
            type="text"
            placeholder="25 milyon’dan fazla ürün içerisinde ara"
          />
        </SearchStyled>
        <ButtonStyled onClick={() => setShowBasket(!showBasket)}>
          Sepetim
        </ButtonStyled>
        {cart.length > 0 && <BadgeStyled>{cart?.length}</BadgeStyled>}
        {showBasket && cart.length > 0 && <Cart deleteItem={deleteItem} />}
        {openModal && <Modal item={item} setOpenModal={setOpenModal} />}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
