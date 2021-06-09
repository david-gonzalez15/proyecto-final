import React from "react";
//dependencies
import styled from "styled-components";
import FormRegister from "../components/FormRegister";
//styled components
const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  return (
    <Container>
      <FormRegister />
    </Container>
  );
};
export default Register;
