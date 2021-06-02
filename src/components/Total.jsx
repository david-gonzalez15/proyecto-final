import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
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
  return (
    <Container>
      <p>
        <b>Total a pagar: $243</b>
      </p>
      <Button>
        <b>Comprar Ahora</b>
      </Button>
    </Container>
  );
};

export default Total;
