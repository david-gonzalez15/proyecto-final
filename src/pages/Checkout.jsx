import React from "react";
//dependencies
import styled from "styled-components";
//loyout
import { LateralMenu } from "../layout/index";
//components
import { CheckoutCard, Total } from "../components/index";
//styled components
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Checkout = () => {
  return (
    <>
      <LateralMenu />
      <Container>
        <CheckoutCard
          title="videojuegos"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          price={234}
          image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
        />
        <CheckoutCard
          title="videojuegos"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          price={234}
          image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
        />
        <CheckoutCard
          title="videojuegos"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          price={234}
          image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
        />
        <CheckoutCard
          title="videojuegos"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
          price={234}
          image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
        />
        <Total />
      </Container>
    </>
  );
};
export default Checkout;
