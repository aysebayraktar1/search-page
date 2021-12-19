/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
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
const App = () => {
  const [products] = useState([
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.0000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 0,
    },
    {
      name: "iphone 12",
      brand: "apple",
      color: "blue",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 1,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "purple",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 2,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 3,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 4,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 5,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 6,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 0,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 7,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 8,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 9,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 10,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 11,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 12,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 13,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 14,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 15,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 16,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 17,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 0,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 18,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 19,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 20,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 21,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 22,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 23,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 24,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 25,
    },
    {
      name: "iphone 11",
      brand: "apple",
      color: "red",
      price: "20.000 TL",
      discount: "10 TL",
      discountedPrice: "19.990 TL",
      img: "https://productimages.hepsiburada.net/s/119/222-222/110000068434989.jpg",
      id: 26,
    },
  ]);
  const data = [
    {
      name: "Sarı",
      categoryName: "Renk",
    },
    {
      name: "En düşük Fiyat",
      categoryName: "Sıralama",
    },
    {
      name: "Samsung",
      categoryName: "Marka",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
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
            {data?.map((item, idx) => (
              <FilterAreaStyled key={idx}>
                <CategoryNameStyled>{item.categoryName}</CategoryNameStyled>
                <FilterItemStyled>{item.name}</FilterItemStyled>
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
