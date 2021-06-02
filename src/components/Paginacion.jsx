import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const PaginacionElement = styled.div`
  display: flex;
  margin: 20px auto;
`;
const LinkButton = styled(Link)`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 15px 20px;
  border-radius: 10px;
  background: #000;
  margin: 0 10px;
`;
const Paginacion = () => {
  return (
    <PaginacionElement>
      <LinkButton>
        <FaArrowLeft />
      </LinkButton>
      <LinkButton>1</LinkButton>
      <LinkButton>4</LinkButton>
      <LinkButton>3</LinkButton>
      <LinkButton>
        <FaArrowRight />
      </LinkButton>
    </PaginacionElement>
  );
};
export default Paginacion;
