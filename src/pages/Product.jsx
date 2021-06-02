import React from "react";
//dependencies
import styled from "styled-components";
//components
import { ProductosRelacionados } from "../components/index";
import { LateralMenu } from "../layout/index.jsx";
import { Carousel } from "../class-conponents/carrusel/index";
import { Button } from "react-bootstrap";
//styled components
const Main = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* justify-content: space-between;
  flex-wrap: wrap; */
`;
const CaruselContainer = styled.div`
  height: 80vh;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  max-width: 1500px;
  margin: auto;
`;
const Descripcion = styled.div`
  grid-column: 1/-1;
`;
const MenuCompra = styled.div`
  grid-column: span 1;
`;

const Product = () => {
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
    <img
      src="https://cdn2.unrealengine.com/egs-deadcells-motiontwin-s1-2560x1440-312502186.jpg"
      alt="4"
    />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />
  ];
  return (
    <>
      <CaruselContainer>
        <Carousel slides={slides} autoplay={true} interval={4000} />
      </CaruselContainer>
      <LateralMenu />
      <Main>
        <Descripcion>
          <article>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of ty
              PageMaker including versions of Lorem Ipsu
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of ty
              PageMaker including versions of Lorem Ipsu
            </p>
          </article>
        </Descripcion>
        <MenuCompra>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="primary">Primary</Button>{" "}
        </MenuCompra>
      </Main>
      <ProductosRelacionados />
    </>
  );
};
export default Product;
