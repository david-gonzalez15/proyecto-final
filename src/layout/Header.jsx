import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//components
import { Container } from "../BasicComponents";
import { auth } from "../firebase";

//styled components
const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #000;
  height: 80px;
  border-radius: 0 0 20px 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
`;
const Logotipo = styled.h2`
  @media (max-width: 500px) {
    margin-top: 0px;
  }
`;
const Item = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
`;
const Menu = styled.nav`
  display: flex;
`;

const Header = () => {
  return (
    <header>
      <ContainerHeader>
        <Item to="/">
          <Logotipo>Odessey</Logotipo>
        </Item>

        <Menu>
          <Item to="/login">Iniciar Sesion</Item>
          <Item to="/register">Registrarme</Item>
        </Menu>
      </ContainerHeader>
    </header>
  );
};
export default Header;
