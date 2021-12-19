import React from "react";
import {
  CardWrapper,
  ImageStyled,
  ProductDetailStyled,
  ProductNameStyled,
  CategoryStyled,
  CategoryNameStyled,
  DiscountendPriceStyled,
  PriceStyled,
  DiscountStyled,
  OldPriceStyled,
  BasketButtonStyled,
} from "./styled";

import product from "../../assets/images/product.png";

const ProductCard = () => {
  const hover = false;
  return (
    <CardWrapper>
      <ImageStyled>
        <img src={product} alt="" />
      </ImageStyled>
      <ProductDetailStyled>
        <ProductNameStyled>
          Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)
          iPhone 11 (Max 2 Line)
        </ProductNameStyled>
        {hover ? (
          <BasketButtonStyled>Sepete Ekle</BasketButtonStyled>
        ) : (
          <>
            <CategoryStyled>
              <CategoryNameStyled>Marka:</CategoryNameStyled>Apple
            </CategoryStyled>
            <CategoryStyled>
              <CategoryNameStyled>Renk:</CategoryNameStyled>Sarı
            </CategoryStyled>
            <DiscountendPriceStyled>80.95 TL</DiscountendPriceStyled>
            <OldPriceStyled>
              <PriceStyled>124.00 TL </PriceStyled>
              <DiscountStyled>12%</DiscountStyled>
            </OldPriceStyled>
          </>
        )}
      </ProductDetailStyled>
    </CardWrapper>
  );
};

export default ProductCard;
