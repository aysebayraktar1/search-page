/* eslint-disable react/react-in-jsx-scope */
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

const App = () => {
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
  const product = [
    {
      name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...",
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
    {
      name: "Samsung",
      categoryName: "Marka",
    },
    {
      name: "Samsung",
      categoryName: "Marka",
    },
    {
      name: "Samsung",
      categoryName: "Marka",
    },
  ];
  return (
    <div className="App">
      <Header />
      <BodyWrapper>
        <PageTitle />
        <ProductAreaStyled>
          <ProductFilterStyled>
            {data.map((item, idx) => (
              <FilterAreaStyled key={idx}>
                <CategoryNameStyled>{item.categoryName}</CategoryNameStyled>
                <FilterItemStyled>{item.name}</FilterItemStyled>
              </FilterAreaStyled>
            ))}
          </ProductFilterStyled>
          <ProductCardWrapper>
            {product.map((item, idx) => (
              <ProductCard key={idx} item={item} />
            ))}
          </ProductCardWrapper>
        </ProductAreaStyled>
      </BodyWrapper>
    </div>
  );
};

export default App;
