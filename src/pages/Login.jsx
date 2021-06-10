import React from "react";
//dependencies
import styled from "styled-components";
import { FormLogin } from "../components/index";
//styled components
const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
  return (
    <Container>
      <FormLogin />
    </Container>
  );
};
export default Login;
