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

import { useStateValue } from "../providers/StateProvider";
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
  font-size: 1.5rem;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Menu = styled.div`
  position: fixed;
  top: 50vh;
  left: 40px;
  @media (max-width: 880px) {
    left: 20px;
  }
`;
const Counter = styled.span`
  color: #707070;
  text-decoration: none;
  font-size: 1rem;
`;

const LateralMenu = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <Menu>
      <LateralCard>
        <IconContext.Provider value={{ color: "#707070", size: "2rem" }}>
          <Link to="/">
            <AiFillHome />
          </Link>
          <Link to="/store">
            <BiStore />
          </Link>
          <div>
            <Link to="/checkout">
              <RiShoppingCartLine />
            </Link>
            <Counter>{basket?.length}</Counter>
          </div>
          <Link to="/blog">
            <BsPeopleFill />
          </Link>
        </IconContext.Provider>
      </LateralCard>
    </Menu>
  );
};
export default LateralMenu;
