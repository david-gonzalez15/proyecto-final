import React, { useState } from "react";
//dependencies
import styled from "styled-components";
import loginimg from "../assets/loginimg.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
//styled components
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #141414;
  color: #fff;
  border-radius: 20px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 10px;
  }
`;
const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    display: none;
  }
  > img {
    width: 100%;
    max-width: 350px;
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;
const FormConntainer = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 300px) {
    font-size: 0.8em;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  input {
    width: 100%;
    padding: 15px 20px;
    margin: 10px 0px;
    border: none;
    border-radius: 50px;
    background: #3b3c3d;
    color: #fff;
    outline: none;
  }
  > button {
    margin-top: 10px;
    background: #078f30;
    border-radius: 50px;
    padding: 10px;
    border: none;
    color: #fff;
    width: 100%;
  }
  .terms {
    display: flex;
    width: 100%;
    margin: 10px;
    label {
      color: #0cb7ec;
    }
  }
  .l-social {
    margin: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button:nth-child(1) {
      width: 48%;
      margin-top: 10px;
      background: #0cb7ec;
      border-radius: 50px;
      padding: 10px 20px;
      border: none;
      color: #fff;
    }
    button:nth-child(2) {
      width: 48%;
      margin-top: 10px;
      background: #fff;
      border-radius: 50px;
      padding: 10px 20px;
      border: none;
      color: #141414;
    }
  }
`;
const Button = styled.button`
  margin-top: 10px;
  background: #078f30;
  border-radius: 5px;
  padding: 10px;
  border: none;
  color: #fff;
`;

// #0cb7ec
const FormLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <FormConntainer>
        <Form>
          <h2>Bienvenido de vuelta</h2>
          <input
            type="text"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn}>
            inicirar Sesion
          </button>
          <div className="l-social">
            <button>Facebook</button>
            <button>Google</button>
          </div>
        </Form>
      </FormConntainer>
      <ImgContainer>
        <img src={loginimg} alt="" />
      </ImgContainer>
    </Container>
  );
};
export default FormLogin;
