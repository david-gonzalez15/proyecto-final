import React from "react";
//dependencies
import styled from "styled-components";

//styled components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  flex-wrap: nowrap;
  margin: 20px 0;
`;
const Img = styled.div`
  height: 20vw;
  width: 100%;
  border-radius: 20px;
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
