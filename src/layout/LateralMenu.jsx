import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//icons
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
//styled components
const LateralCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #141414;
  border-radius: 15px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1000;
  width: 45px;
  height: 300px;
  position: relative;
  top: -150px;
`;
const Menu = styled.div`
  position: fixed;
  top: 50vh;
  left: 40px;
`;

const LateralMenu = () => {
  return (
    <Menu>
      <LateralCard>
        <IconContext.Provider value={{ color: "#707070", size: "2em" }}>
          <Link to="/">
            <AiFillHome color="#fff" />
          </Link>
          <Link to="/store">
            <BiStore />
          </Link>
          <Link to="/checkout">
            <FiShoppingCart />
          </Link>
          <Link to="/blog">
            <BsPeopleFill />
          </Link>
        </IconContext.Provider>
      </LateralCard>
    </Menu>
  );
};
export default LateralMenu;
