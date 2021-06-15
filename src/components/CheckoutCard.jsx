import React from "react";
//dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../providers/StateProvider";
//components

//styled components
const LinkButton = styled(Link)`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  background: #3b3c3d;
`;
const Card = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: #141414;
  width: 100%;
  margin: 10px 0;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 10px auto;
  }

  /* min-height: 300px;
  min-height: 25vw; */
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  width: 80%;
  padding: 20px 40px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 425px) {
    width: 100%;
    align-items: center;
  }
  > h3 {
    font-size: 1.125em;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
  }
  > p {
    @media (max-width: 768px) {
      display: none;
    }
  }
  button {
    width: 150px;
    background: #ce0d0d;
    border-radius: 5px;
    padding: 10px;
    border: none;
    color: #fff;
    @media (max-width: 425px) {
      padding: 5px;
      font-size: 0.8rem;
    }
  }
`;
const ImgContainer = styled.div`
  width: 20%;
  min-width: 170px;
  padding: 10px;
  @media (max-width: 768px) {
    min-width: 130px;
  }
  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
    @media (max-width: 768px) {
      border-radius: 10px;
    }
  }
`;
const CheckoutCard = ({ id, title, description, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <Card>
      <ImgContainer>
        <img src={image} alt="" />
      </ImgContainer>
      <Info>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>
          <b>${price}</b>
        </span>
        <button onClick={removeFromBasket}>
          <b>Eliminar</b>
        </button>
      </Info>
    </Card>
  );
};
export default CheckoutCard;
