import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//styled components
const LinkCard = styled(Link)`
  color: #0cb7ec;
  text-decoration: none;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: #141414;
  grid-column: span 1;
  margin: 30px 0;
  min-height: 300px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  > h3 {
    font-size: 1.5em;
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    button {
      margin-top: 10px;
      background: #141414;
      border-radius: 5px;
      padding: 10px;
      border: none;
      color: #0cb7ec;
    }
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;
const ProductCard = ({ id, title, description, image }) => {
  return (
    <Card>
      <ImgContainer>
        <img src={image} alt="" />
      </ImgContainer>
      <Info>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <LinkCard to="/product">
            <b>Ver</b>
          </LinkCard>
          <button>
            <b>Agregar</b>
          </button>
        </div>
      </Info>
    </Card>
  );
};
export default ProductCard;
