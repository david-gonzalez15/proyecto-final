import React, { useEffect } from "react";
//dependencies
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//components
import { ArticuloCard, Paginacion } from "../components/index";
import { LateralMenu, MenuInferior } from "../layout/index";

//styled components
const GlobalStyle = createGlobalStyle`
  body{
    background: #fbfbfE;
    color: #141414;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  
}
body::-webkit-scrollbar {
    width: 9px; 
    background: #fff;        
}
  body::-webkit-scrollbar-thumb{
    background: #ccc;
    border-radius: 10px;
  }
`;
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  margin-bottom: 80px;
  box-sizing: border-box;
  @media (max-width: 425px) {
    width: 100%;
  }

  /* justify-content: space-between;
  flex-wrap: wrap; */
`;
const Articulos = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 0 0 45px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    padding: 5px;
    width: 100%;
  }
`;

const Blog = () => {
  return (
    <>
      <MenuInferior />
      <GlobalStyle />
      <LateralMenu />
      <Articulos>
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/ec296f11-b5f2-440b-b29d-bbf5c04b228e.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/ec296f11-b5f2-440b-b29d-bbf5c04b228e.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/ec296f11-b5f2-440b-b29d-bbf5c04b228e.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://edteam-media.s3.amazonaws.com/blogs/original/e87ba751-40ca-4ee0-8039-1a6f726f9d43.png"
        />
      </Articulos>
      <Container>
        <Paginacion />
      </Container>
    </>
  );
};
export default Blog;
