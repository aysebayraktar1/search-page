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
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterColor, setFilterColor] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [isFilterBrand, setIsFilterBrand] = useState(false);
  const [filter, setFilter] = useState("");

  console.log(filter);
  useEffect(async () => {
    localStorage.setItem("cart", JSON.stringify([]));
    await axios.post("http://localhost:5000/products").then((res) => {
      setProducts(res.data);

      const brandNumber = res.data.reduce((acc, cur) => {
        acc[cur.brand] = (acc[cur.brand] || 0) + 1;
        return acc;
      }, {});
      setFilterBrand(brandNumber);

      const colorNumber = products.reduce((acc, cur) => {
        acc[cur.color] = (acc[cur.color] || 0) + 1;
        return acc;
      }, {});
      setFilterColor(colorNumber);
    });
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * 12;
  const indexOfFirstProduct = indexOfLastProduct - 12;
  const currentProduct = filteredProducts
    ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleFilterBrand = (item) => {
    setFilter((previousState) => {
      const data = {
        brandFilter: item,
        colorFilter: null,
        sortMethod: null,
      };
      if (previousState == item) {
        axios
          .post("http://localhost:5000/products")
          .then((response) => setProducts(response.data));
        return item;
      } else {
        axios
          .post("http://localhost:5000/products", data)
          .then((response) => setProducts(response.data));
        return item;
      }
    });

    setIsFilterBrand(!isFilterBrand);
  };

  const handleFilterColor = (item) => {
    setFilter((previousState) => {
      const data = {
        brandFilter: null,
        colorFilter: item,
        sortMethod: null,
      };
      if (previousState == item) {
        axios
          .post("http://localhost:5000/products")
          .then((response) => setProducts(response.data));
        return item;
      } else {
        axios
          .post("http://localhost:5000/products", data)
          .then((response) => setProducts(response.data));
        return item;
      }
    });

    setIsFilterBrand(!isFilterBrand);
  };

  const handleFilterSort = (type) => {
    const data = {
      brandFilter: null,
      colorFilter: null,
      sortMethod: type,
    };
    axios
      .post("http://localhost:5000/products", data)
      .then((response) => setProducts(response.data));
  };

  const data = [
    {
      name: "En Düşük Fiyat",
      type: null,
    },
    {
      name: "En Yüksek Fiyat",
      type: "resentDesc",
    },
    {
      name: "En Yeniler (A>Z)",
      type: "resentAsc",
    },
    {
      name: "En Yeniler (Z>A)",
      type: "resentAsc",
    },
  ];
  const handleFilter = (val) => {
    setFilteredProducts(val);
  };

  return (
    <div className="App">
      <Header products={products} handleFilter={handleFilter} />
      <BodyWrapper>
        <PageTitle />
        <ProductAreaStyled>
          <ProductFilterStyled>
            <CategoryNameStyled>Renk</CategoryNameStyled>
            {Object.keys(filterColor)?.map((item, id) => (
              <FilterAreaStyled key={id}>
                <FilterItemStyled onClick={() => handleFilterColor(item)}>
                  {item}
                </FilterItemStyled>
              </FilterAreaStyled>
            ))}
            {data?.map(({ name, type }, id) => (
              <FilterAreaStyled key={id}>
                <FilterItemStyled onClick={() => handleFilterSort(type)}>
                  {name}
                </FilterItemStyled>
              </FilterAreaStyled>
            ))}
            <CategoryNameStyled>Marka</CategoryNameStyled>
            {Object.keys(filterBrand)?.map((item, id) => (
              <FilterAreaStyled key={id}>
                <FilterItemStyled
                  data-attribute={item}
                  onClick={() => handleFilterBrand(item)}
                >
                  {item}
                </FilterItemStyled>
              </FilterAreaStyled>
            ))}
          </ProductFilterStyled>
          <ProductCardWrapper>
            {currentProduct.map((item, id) => (
              <ProductCard key={id} item={item} />
            ))}
          </ProductCardWrapper>
        </ProductAreaStyled>
        {(filteredProducts?.length || products.length) && (
          <Pagination
            totalItem={
              filteredProducts ? filteredProducts.length : products.length
            }
            paginate={paginate}
          />
        )}
      </BodyWrapper>
    </div>
  );
};

export default App;
