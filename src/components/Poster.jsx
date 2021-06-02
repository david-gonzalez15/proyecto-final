import React from "react";
//dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  margin: 30px 0;
  min-height: 300px;
  height: 25vw;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  > h3 {
    font-size: 1.5em;
  }
`;
const ImgContainer = styled.div`
  width: 50%;
  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;
const Poster = ({ id, title, description, image }) => {
  return (
    <Card>
      <Info>
        <h3>{title}</h3>
        <p>{description}</p>
        <LinkButton>ir a la tienda</LinkButton>
      </Info>
      <ImgContainer>
        <img src={image} alt="" />
      </ImgContainer>
    </Card>
  );
};
export default Poster;
