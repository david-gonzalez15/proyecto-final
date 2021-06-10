import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useStateValue } from "../providers/StateProvider";

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
  min-height: 300px;
  transition: ease 0.3s;
  :hover {
    transform: translate(-2px, -10px);
    box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.1);
    transition: ease 0.3s;
    @media (max-width: 500px) {
      transform: none;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  @media (max-width: 500px) {
    padding: 20px;
  }
  > h3 {
    font-size: 1.5em;
    @media (max-width: 580px) {
      font-size: 0.8em;
    }
  }
  > p {
    @media (max-width: 680px) {
      display: none;
    }
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
      @media (max-width: 580px) {
        font-size: 0.8em;
        padding: 0px;
      }
    }
    @media (max-width: 500px) {
      flex-direction: column;
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
const ProductCard = (id, title, image, description, price) => {
  // const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price
  //     }
  //   });
  // };
  return (
    <Card>
      <ImgContainer>
        <img src={image} alt="" />
      </ImgContainer>
      <Info>
        <h3>{title}</h3>
        <p>{description}</p>

        <b>
          $<span>{price}</span>
        </b>

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
