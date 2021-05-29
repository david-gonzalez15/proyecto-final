import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//loyout
import { LateralMenu } from "../layout/index";
//components
import { Carousel } from "../class-conponents/carrusel/index";
import { Container } from "../BasicComponents";
import { Colors } from "../assets/Colors";
//icons
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BiGame } from "react-icons/bi";

//styled components
const HomeContainer = styled(Container)`
  width: 80%;
`;
const LinkMenu = styled(Link)``;
const Menu = styled.nav`
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
        <Menu>
          <IconContext.Provider value={{ color: "#707070", size: "8em" }}>
            <AiFillHome color="#fff" />
            <MdComputer />
            <FaGamepad />
            <BiGame />
          </IconContext.Provider>
        </Menu>
      </HomeContainer>
    </>
  );
};
export default Home;
