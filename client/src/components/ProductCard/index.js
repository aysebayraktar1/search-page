import React, { useEffect, useState } from "react";
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
  BasketButtonStyledDisabled,
} from "./styled";
import PropTypes from "prop-types";
import { useStoreActions, useStoreState } from "easy-peasy";

const ProductCard = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);
  const addShoppingCart = useStoreActions((actions) => actions.addShoppingCart);
  const cart = useStoreState((state) => state.cart);

  const { name, brand, color, price, discount, image, id } = item;

  const date = new Date().getTime();

  const handleClick = () => {
    addShoppingCart({ item, date });
  };
  function percentage(num, per) {
    return parseInt(num) - (parseInt(num) / 100) * parseInt(per);
  }
  useEffect(() => {
    const isEnable = cart?.find((val) => val.item.id === id) || false;
    setIsAdded(isEnable);
  }, [cart]);

  return (
    <CardWrapper>
      <ImageStyled>
        <img src={image} alt="" width="100%" height="100%" />
      </ImageStyled>
      <ProductDetailStyled>
        <ProductNameStyled>{name}</ProductNameStyled>
        {isAdded ? (
          <BasketButtonStyledDisabled onClick={handleClick}>
            Bu ürünü sepete ekleyemezsiniz.
          </BasketButtonStyledDisabled>
        ) : (
          <>
            <BasketButtonStyled onClick={handleClick}>
              Sepete Ekle
            </BasketButtonStyled>
            <CategoryStyled>
              <CategoryNameStyled>Marka:</CategoryNameStyled>
              {brand}
            </CategoryStyled>
            <CategoryStyled>
              <CategoryNameStyled>Renk:</CategoryNameStyled>
              {color}
            </CategoryStyled>
            <DiscountendPriceStyled>
              {percentage(price, discount)} TL
            </DiscountendPriceStyled>
            {parseInt(discount) > 0 && (
              <OldPriceStyled>
                <PriceStyled>{price} TL</PriceStyled>
                <DiscountStyled>{discount}</DiscountStyled>
              </OldPriceStyled>
            )}
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
