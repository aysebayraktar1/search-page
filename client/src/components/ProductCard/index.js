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
import PropTypes from "prop-types";
import { useStoreActions } from "easy-peasy";

const ProductCard = ({ item }) => {
  const addShoppingCart = useStoreActions((actions) => actions.addShoppingCart);
  const { name, brand, color, price, discount, discountedPrice, img } = item;

  const hover = true;
  return (
    <CardWrapper>
      <ImageStyled>
        <img src={img} alt="" width="100%" height="100%" />
      </ImageStyled>
      <ProductDetailStyled>
        <ProductNameStyled>{name}</ProductNameStyled>
        {hover ? (
          <BasketButtonStyled onClick={() => addShoppingCart(item)}>
            Sepete Ekle
          </BasketButtonStyled>
        ) : (
          <>
            <CategoryStyled>
              <CategoryNameStyled>Marka:</CategoryNameStyled>
              {brand}
            </CategoryStyled>
            <CategoryStyled>
              <CategoryNameStyled>Renk:</CategoryNameStyled>
              {color}
            </CategoryStyled>
            <DiscountendPriceStyled>{discountedPrice}</DiscountendPriceStyled>
            <OldPriceStyled>
              <PriceStyled>{price}</PriceStyled>
              <DiscountStyled>{discount}</DiscountStyled>
            </OldPriceStyled>
          </>
        )}
      </ProductDetailStyled>
    </CardWrapper>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.object,
};
