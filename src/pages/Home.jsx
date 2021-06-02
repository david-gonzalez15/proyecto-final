import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//loyout
import { LateralMenu } from "../layout/index";
//components
import { Poster, ProductCard } from "../components/index";
import { Carousel } from "../class-conponents/carrusel/index";
import { Container } from "../BasicComponents";
import { Colors } from "../assets/Colors";

//icons
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";

//styled components
const HomeContainer = styled(Container)`
  width: 80%;
  max-width: 1000px;
`;
const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
`;
const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
`;
const CaruselContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1500px;
  margin: auto;
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

const Home = () => {
  let slides = [
    <img
      src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"
      alt="1"
    />,
    <img
      src="https://www.zonammorpg.com/wp-content/uploads/2020/12/warframe-epic-810x400.jpg"
      alt="2"
    />,
    <img
      src="https://i.pinimg.com/originals/cd/74/50/cd7450cf06d003bba1af588f0ac6722a.jpg"
      alt="3"
    />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />
  ];
  return (
    <>
      <CaruselContainer>
        <Carousel slides={slides} autoplay={true} interval={4000} />
      </CaruselContainer>
      <LateralMenu />
      <HomeContainer>
        <Navigation>
          <IconContext.Provider value={{ color: "#707070", size: "8em" }}>
            <AiFillHome color="#fff" />
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
          <Poster
            id="12236435"
            title="Titulo del producto"
            description="Descubre cientos de computadoras preensambladas listas para comprar"
            image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
          />
          <ProductCard
            id="12236435"
            title="Titulo del producto"
            description="Descubre cientos de computadoras preensambladas listas para comprar"
            image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
          />
          <ProductCard
            id="12236435"
            title="Titulo del producto"
            description="Descubre cientos de computadoras preensambladas listas para comprar"
            image="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfa2.png"
          />
          <ProductCard
            id="12236435"
            title="Titulo del producto"
            description="Descubre cientos de computadoras preensambladas listas para comprar"
            image="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"
          />
          <ProductCard
            id="12236435"
            title="Titulo del producto"
            description="Descubre cientos de computadoras preensambladas listas para comprar"
            image="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"
          />
        </Products>
      </HomeContainer>
    </>
  );
};
export default Home;
