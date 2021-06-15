import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../providers/StateProvider";
import { getBasketTotal } from "../reducers/reducer";

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto 50px auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 150px;
  background: #078f30;
  border-radius: 5px;
  padding: 10px;
  border: none;
  color: #fff;
  margin-left: 30px;
`;

const Total = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button>
        <b>Comprar Ahora</b>
      </Button>
    </Container>
  );
};

export default Total;
