import React, { useState } from "react";
import {
  ProducTitleStyled,
  PageTitleWrapper,
  SearchedWordStyled,
  SearchedWord,
  SearchedWordTitle,
  SortButtonStyled,
  DropdownStyled,
  DropdownItemStyled,
} from "./styled";

import arrow from "../../assets/images/arrow.png";

const PageTitle = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <PageTitleWrapper>
      <div>
        <ProducTitleStyled>IPhone Ios Cep Telefonu</ProducTitleStyled>
        <SearchedWordStyled>
          <SearchedWordTitle>Aranan Kelime: </SearchedWordTitle>
          <SearchedWord> iphone 11</SearchedWord>
        </SearchedWordStyled>
      </div>
      <SortButtonStyled onClick={() => setOpenDropdown(!openDropdown)}>
        Sıralama
        <img src={arrow} alt="" />
      </SortButtonStyled>
      {openDropdown && (
        <DropdownStyled>
          <DropdownItemStyled>En Düşük Fiyat</DropdownItemStyled>
          <DropdownItemStyled>En Yüksek Fiyat</DropdownItemStyled>
          <DropdownItemStyled>En Yeniler (A{">"}Z)</DropdownItemStyled>
          <DropdownItemStyled>En Yeniler (A{"<"}Z)</DropdownItemStyled>
        </DropdownStyled>
      )}
    </PageTitleWrapper>
  );
};

export default PageTitle;
