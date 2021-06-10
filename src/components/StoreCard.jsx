import React from "react";
//dependencies
import styled from "styled-components";

//styled components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  flex-wrap: nowrap;

  transition: ease 0.3s;
  :hover {
    transform: translate(-2px, -10px);
    box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.1);
    transition: ease 0.3s;
  }
`;
const Img = styled.div`
  height: 15em;
  width: 100%;
  border-radius: 20px;
  @media (max-width: 500px) {
    height: 10em;
  }
  > img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const StoreCard = ({ title, price, image }) => {
  return (
    <Card>
      <Img>
        <img src={image} alt="" />
      </Img>
      <Info>
        <p>{title}</p>
        <span>${price}</span>
      </Info>
    </Card>
  );
};
export default StoreCard;
