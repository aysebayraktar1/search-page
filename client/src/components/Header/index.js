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
import PropTypes from "prop-types";

const Header = ({ products, handleFilter }) => {
  const [showBasket, setShowBasket] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState();

  const deleteItem = (item) => {
    setShowBasket(false);
    setItem(item);
    setOpenModal(true);
  };
  const cart = useStoreState((state) => state.cart);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    if (value.length >= 2) {
      result = products.filter((data) => {
        return data.name.search(value) != -1;
      });
      handleFilter(result);
    }
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoStyled src={logo} alt="" />
        <SearchStyled>
          <SearchImageStyled>
            <img src={search} alt="" />
          </SearchImageStyled>
          <InputStyled
            type="text"
            placeholder="25 milyon’dan fazla ürün içerisinde ara"
            onChange={(event) => handleSearch(event)}
          />
        </SearchStyled>
        <ButtonStyled onClick={() => setShowBasket(!showBasket)}>
          Sepetim
        </ButtonStyled>
        {cart?.length > 0 && <BadgeStyled>{cart.length}</BadgeStyled>}
        {showBasket && cart.length > 0 && <Cart deleteItem={deleteItem} />}
        {openModal && <Modal item={item} setOpenModal={setOpenModal} />}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

Header.propTypes = {
  products: PropTypes.array,
  handleFilter: PropTypes.func,
};
