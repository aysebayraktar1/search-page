import React, { useEffect, useState } from "react";
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
  const [sortCart, setSortCart] = useState([]);

  useEffect(() => {
    setSortCart(cart?.sort((a, b) => a.date - b.date));
  }, [cart]);

  return (
    <BasketStyled>
      {sortCart?.map(({ item }, idx) => (
        <BasketItemStyled key={idx}>
          <ImageStyled src={item.image} alt="" />
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
