import React from "react";
//dependencies
import styled from "styled-components";
import { useStateValue } from "../providers/StateProvider";
//loyout
import { LateralMenu, MenuInferior } from "../layout/index";
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
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;
const Checkout = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <MenuInferior />
      <LateralMenu />
      <Container>
      {basket.map((item) => (
            <CheckoutCard
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              
            />
          ))} 
        
        <Total />
      </Container>
    </>
  );
};
export default Checkout;
