import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  background: #fff;
  width: 32%;
  margin: 30px 0;
  min-height: 300px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #141414;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  > h3 {
    font-size: 1.5em;
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
const ArticuloCard = ({ id, title, description, image }) => {
  return (
    <Card>
      <ImgContainer>
        <img src={image} alt="" />
      </ImgContainer>
      <Info>
        <h3>{title}</h3>
        <p>{description}</p>
        <LinkCard>
          <b>Ver</b>
        </LinkCard>
      </Info>
    </Card>
  );
};
export default ArticuloCard;
