import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//icons
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
//styled components
const Menu = styled.div`
  position: fixed;
  top: 85vh;
  width: 100%;
`;
const LateralCard = styled.div`
  display: none;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  background: #141414;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1000;
  width: 100%;
  height: 45px;
  position: relative;

  @media (max-width: 500px) {
    display: flex;
  }
`;

const MenuInferior = () => {
  return (
    <Menu>
      <LateralCard>
        <IconContext.Provider value={{ color: "#707070", size: "2rem" }}>
          <Link to="/">
            <AiFillHome color="#fff" />
          </Link>
          <Link to="/store">
            <BiStore />
          </Link>
          <Link to="/checkout">
            <RiShoppingCartLine />
          </Link>
          <Link to="/blog">
            <BsPeopleFill />
          </Link>
        </IconContext.Provider>
      </LateralCard>
    </Menu>
  );
};
export default MenuInferior;
