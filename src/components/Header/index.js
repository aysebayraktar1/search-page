import React, { useState } from "react";
import {
  HeaderWrapper,
  InputStyled,
  SearchImageStyled,
  SearchStyled,
  ButtonStyled,
  HeaderContainer,
  LogoStyled,
  BadgeStyled,
  BasketStyled,
  BasketItemStyled,
  ImageStyled,
  ProductNameStyled,
  RemoveButtonStyled,
  ProductDescStyled,
} from "./styled";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import product from "../../assets/images/product.png";
import Modal from "../../components/Modal";

const Header = () => {
  const data = [
    {
      image: product,
      title: "iPhone 11 Kırmızı Kılıflı Garantili Telefon",
    },
    {
      image: product,
      title: "iPhone 11 Kırmızı Kılıflı Garantili Telefon",
    },
    {
      image: product,
      title: "iPhone 11 Kırmızı Kılıflı Garantili Telefon",
    },
    {
      image: product,
      title: "iPhone 11 Kırmızı Kılıflı Garantili Telefon",
    },
  ];
  const [showBasket, setShowBasket] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const deleteItem = () => {
    setShowBasket(false);
    setOpenModal(true);
  };
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
        <BadgeStyled>1</BadgeStyled>
        {showBasket && (
          <BasketStyled>
            {data.map(({ image, title }, idx) => (
              <BasketItemStyled key={idx}>
                <ImageStyled src={image} alt="" />
                <ProductDescStyled>
                  <ProductNameStyled>{title}</ProductNameStyled>
                  <RemoveButtonStyled onClick={() => deleteItem()}>
                    Kaldır
                  </RemoveButtonStyled>
                </ProductDescStyled>
              </BasketItemStyled>
            ))}
          </BasketStyled>
        )}
        {openModal && <Modal />}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
