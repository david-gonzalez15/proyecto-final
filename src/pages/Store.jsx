import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//components
import { LateralMenu } from "../layout/index.jsx";
import { StoreCard } from "../components/index";
//icons
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
//styled-components
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Products = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
`;
const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
`;
const Menu = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #000;
  height: 80px;
  border-radius: 0 0 20px 20px;
  margin-top: 50px;
`;
const SubMenu = styled.nav`
  display: flex;
`;
const Buscador = styled.div`
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  background: #141414;
  max-width: 400px;

  > input {
    border: none;
    outline: none;
    background: #000;
    color: #fff;
    background: #141414;
    padding: 5px 15px;
  }
  > button {
    background: #141414;
    border: none;
    padding: 5px;
    border-radius: 50px;
  }
`;
const Store = () => {
  return (
    <>
      <LateralMenu />
      <Container>
        <Navigation>
          <IconContext.Provider value={{ color: "#707070", size: "8em" }}>
            <MdComputer />
            <FaGamepad />
            <BiGame />
          </IconContext.Provider>
        </Navigation>
        <Menu>
          <SubMenu>
            <LinkMenu to="/">Explorar</LinkMenu>
            <LinkMenu to="/store">Tienda</LinkMenu>
          </SubMenu>
          <Buscador>
            <input type="text" placeholder="Buscar..." />
            <button>
              <BiSearchAlt size="1.3em" color="#fff" />
            </button>
          </Buscador>
        </Menu>
        <Products>
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/capsule_616x353.jpg?t=1619464336"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
        </Products>
      </Container>
    </>
  );
};
export default Store;
