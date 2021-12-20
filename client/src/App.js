/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react";
import {
  BodyWrapper,
  ProductAreaStyled,
  FilterAreaStyled,
  FilterItemStyled,
  CategoryNameStyled,
  ProductCardWrapper,
  ProductFilterStyled,
} from "./styled";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import axios from "axios";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await axios
      .post("http://localhost:5000/products")
      .then((res) => setProducts(res.data));

    const brandNumber = products.reduce((acc, cur) => {
      acc[cur.brand] = (acc[cur.brand] || 0) + 1;
      return acc;
    }, {});

    setFilterBrand(brandNumber);

    const colorNumber = products.reduce((acc, cur) => {
      acc[cur.color] = (acc[cur.color] || 0) + 1;
      return acc;
    }, {});
    setFilterColor(colorNumber);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [filterColor, setFilterColor] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);

  console.log(filterColor, filterBrand);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * 12;
  const indexOfFirstProduct = indexOfLastProduct - 12;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="App">
      <Header />
      <BodyWrapper>
        <PageTitle />
        <ProductAreaStyled>
          <ProductFilterStyled>
            <CategoryNameStyled>Renk</CategoryNameStyled>
            {Object.keys(filterColor)?.map((item, idx) => (
              <FilterAreaStyled key={idx}>
                <FilterItemStyled>{item}</FilterItemStyled>
              </FilterAreaStyled>
            ))}
            <CategoryNameStyled>Marka</CategoryNameStyled>
            {Object.keys(filterBrand)?.map((item, idx) => (
              <FilterAreaStyled key={idx}>
                <FilterItemStyled>{item}</FilterItemStyled>
              </FilterAreaStyled>
            ))}
          </ProductFilterStyled>
          <ProductCardWrapper>
            {currentProduct.map((item, idx) => (
              <ProductCard key={idx} item={item} />
            ))}
          </ProductCardWrapper>
        </ProductAreaStyled>
        <Pagination totalItem={products.length} paginate={paginate} />
      </BodyWrapper>
    </div>
  );
};

export default App;
