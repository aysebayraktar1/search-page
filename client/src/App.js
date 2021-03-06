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

  useEffect(async () => {
    //save localstorage empty array
    localStorage.setItem("cart", JSON.stringify([]));

    //fetch all data
    await axios.post("http://localhost:5000/products").then((res) => {
      setProducts(res.data);

      //calculate color category name from all data
      const colorNumber = res.data.reduce((acc, cur) => {
        acc[cur.color] = (acc[cur.color] || 0) + 1;
        return acc;
      }, {});

      setFilterColor(colorNumber);
      //calculate brand category name from all data
      const brandNumber = res.data.reduce((acc, cur) => {
        acc[cur.brand] = (acc[cur.brand] || 0) + 1;
        return acc;
      }, {});
      setFilterBrand(brandNumber);
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
    console.log(filter);
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
      name: "En D??????k Fiyat",
      type: "resentAsc",
    },
    {
      name: "En Y??ksek Fiyat",
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
            <CategoryNameStyled>S??ralama</CategoryNameStyled>
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
                <FilterItemStyled onClick={() => handleFilterBrand(item)}>
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
