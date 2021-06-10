import React from "react";
import styled from "styled-components";

import { ArticuloCard } from "../components/index";

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  margin: 20px auto;
  justify-content: space-between;
  overflow-x: scroll;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  ::-webkit-scrollbar {
    height: 9px;
    background: #ccc;
  }
  ::-webkit-scrollbar-thumb {
    background: #3b3c3d;
    border-radius: 10px;
  }
`;

const ArticulosRelacionados = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ArticulosRelacionados;
