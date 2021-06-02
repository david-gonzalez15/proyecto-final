import React from "react";
import styled from "styled-components";

import { StoreCard } from "./index";

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  margin: auto;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 9px;
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #3b3c3d;
    border-radius: 10px;
  }
`;

const ProductosRelacionados = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ProductosRelacionados;
