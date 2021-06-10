import React from "react";
//dependencies
import styled from "styled-components";
import { LateralMenu, MenuInferior } from "../layout/index";
import { Carousel } from "../class-conponents/carrusel/index";
import { createGlobalStyle } from "styled-components";
import ArticulosRelacionados from "../components/ArticulosRelacionados";
//styled components
const GlobalStyle = createGlobalStyle`
  body{
    background: #fbfbfE;
    color: #141414;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2em;
    body::-webkit-scrollbar {
    width: 9px; 
    background: #fff;        
}
  body::-webkit-scrollbar-thumb{
    background: #ccc;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
        background: #fff;
      }
  
}
`;
const Main = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 0 0 45px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  article {
    text-align: justify;
    background: #fff;
    border: 1px solid #e1e1e1;
    padding: 40px 60px;
    border-radius: 20px;
    @media (max-width: 768px) {
      border: none;
      padding: 20px 40px;
    }
    @media (max-width: 500px) {
      border: none;
      padding: 10px;
    }
    p {
      color: #697477;
      font-size: 1.125em;
      @media (max-width: 900px) {
        font-size: 1em;
      }
      @media (max-width: 500px) {
        font-size: 0.9sem;
      }
    }
  }
`;
const CaruselContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1500px;
  margin: auto;
`;

const Articulo = () => {
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
      <MenuInferior />
      <GlobalStyle />
      <CaruselContainer>
        <Carousel slides={slides} autoplay={true} interval={4000} />
      </CaruselContainer>
      <LateralMenu />
      <Main>
        <article>
          <h2>Titulo del articulo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cum sint et laboriosam accusamus mollitia, obcaecati quia
            accusantium repellendus enim.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum cum sint et laboriosam accusamus
            mollitia, obcaecati quia accusantium repellendus enim.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum cum sint et
            laboriosam accusamus mollitia, obcaecati quia accusantium
            repellendus enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cum sint et laboriosam accusamus mollitia, obcaecati quia
            accusantium repellendus enim.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum cum sint et laboriosam accusamus
            mollitia, obcaecati quia accusantium repellendus enim.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum cum sint et
            laboriosam accusamus mollitia, obcaecati quia accusantium
            repellendus enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cum sint et laboriosam accusamus mollitia, obcaecati quia
            accusantium repellendus enim.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum cum sint et laboriosam accusamus
            mollitia, obcaecati quia accusantium repellendus enim.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum cum sint et
            laboriosam accusamus mollitia, obcaecati quia accusantium
            repellendus enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cum sint et laboriosam accusamus mollitia, obcaecati quia
            accusantium repellendus enim.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum cum sint et laboriosam accusamus
            mollitia, obcaecati quia accusantium repellendus enim.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum cum sint et
            laboriosam accusamus mollitia, obcaecati quia accusantium
            repellendus enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cum sint et laboriosam accusamus mollitia, obcaecati quia
            accusantium repellendus enim.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum cum sint et laboriosam accusamus
            mollitia, obcaecati quia accusantium repellendus enim.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatum cum sint et
            laboriosam accusamus mollitia, obcaecati quia accusantium
            repellendus enim.
          </p>
        </article>
      </Main>
      <ArticulosRelacionados />
    </>
  );
};
export default Articulo;
