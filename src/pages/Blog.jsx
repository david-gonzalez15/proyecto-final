import React from "react";
//dependencies
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//components
import { ArticuloCard, Paginacion } from "../components/index";
import { LateralMenu } from "../layout/index";
//styled components
const GlobalStyle = createGlobalStyle`
  body{
    background: #fff;
    color: #141414;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  
}
`;
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  /* justify-content: space-between;
  flex-wrap: wrap; */
`;
const Articulos = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Blog = () => {
  return (
    <>
      <GlobalStyle />
      <LateralMenu />
      <Articulos>
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
        />
        <ArticuloCard
          id="12236435"
          title="Titulo del producto"
          description="Descubre cientos de computadoras preensambladas listas para comprar"
          image="https://www.manzanasusadas.com/blog/wp-content/uploads/2017/12/computer-297754_960_720.png"
        />
      </Articulos>
      <Container>
        <Paginacion />
      </Container>
    </>
  );
};
export default Blog;
