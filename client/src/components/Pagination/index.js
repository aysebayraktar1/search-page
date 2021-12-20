import React, { useState } from "react";
import PropTypes from "prop-types";
import { PaginationBoxStyled, PaginationWrapper } from "./styled";
import arrowRight from "../../assets/images/arrowRight.png";
import arrowLeft from "../../assets/images/arrowLeft.png";

const Pagination = ({ totalItem, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / 12); i++) {
    pageNumbers.push(i);
  }

  const [number, setNumber] = useState(1);
  const lastElement = pageNumbers[pageNumbers.length - 1];

  return (
    <PaginationWrapper>
      <PaginationBoxStyled
        onClick={() => {
          number !== 1 && setNumber(number - 1);
          paginate(number);
        }}
      >
        <img src={arrowLeft} alt="" />
      </PaginationBoxStyled>
      {pageNumbers?.map((number, idx) => (
        <PaginationBoxStyled
          key={idx}
          onClick={() => {
            paginate(number);
            setNumber(number);
          }}
        >
          <div>{number}</div>
        </PaginationBoxStyled>
      ))}
      <PaginationBoxStyled
        onClick={() => {
          number !== lastElement && setNumber(number + 1);
          paginate(number);
        }}
      >
        <img src={arrowRight} alt="" />
      </PaginationBoxStyled>
    </PaginationWrapper>
  );
};
export default Pagination;

Pagination.propTypes = {
  totalItem: PropTypes.number,
  paginate: PropTypes.func,
};
