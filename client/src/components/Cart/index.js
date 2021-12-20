import React from "react";
import {
  BasketStyled,
  BasketItemStyled,
  ImageStyled,
  ProductNameStyled,
  RemoveButtonStyled,
  ProductDescStyled,
} from "./styled";
import PropTypes from "prop-types";
import { useStoreState } from "easy-peasy";

const Cart = ({ deleteItem }) => {
  const cart = useStoreState((state) => state.cart);
  return (
    <BasketStyled>
      {cart?.map((item, idx) => (
        <BasketItemStyled key={idx}>
          <ImageStyled src={item.img} alt="" />
          <ProductDescStyled>
            <ProductNameStyled>{item.name}</ProductNameStyled>
            <RemoveButtonStyled onClick={() => deleteItem(item)}>
              Kaldır
            </RemoveButtonStyled>
          </ProductDescStyled>
        </BasketItemStyled>
      ))}
    </BasketStyled>
  );
};
export default Cart;

Cart.propTypes = {
  deleteItem: PropTypes.func,
};
