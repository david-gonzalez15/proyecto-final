import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//components
import { Container } from "../BasicComponents";
import { useStateValue } from "../providers/StateProvider";
//firebase
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
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <header>
      <ContainerHeader>
        <Item to="/">
          <Logotipo>Odessey</Logotipo>
        </Item>

        <Menu>
          <Item to={!user && "/login"} onClick={handleAuthentication}>
            {user ? "Cerrar Sesión" : "Iniciar Sesión"}
          </Item>
          <Item to="/register">{user ? user.email : "Registrarme"}</Item>
        </Menu>
      </ContainerHeader>
    </header>
  );
};
export default Header;
