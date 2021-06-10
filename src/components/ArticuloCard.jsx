import React, { useEffect } from "react";
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
  border-radius: 10px;
  border: 1px solid #e1e1e1;
  background: #fff;
  grid-column: span 1;
  margin: 30px 0;
  /* min-height: 300px; */
  transition: ease 0.3s;
  margin: 5px;
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
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1.125em;

  p {
    color: #697477;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 10px;
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
