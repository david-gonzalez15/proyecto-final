import React from "react";
//dependencies
import styled from "styled-components";
import loginimg from "../assets/loginimg.png";
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
`;
const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

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
    ::placeholder {
      color: #fff;
    }
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
  return (
    <Container>
      <FormConntainer>
        <Form>
          <h2>Unete a nuestra comunidad</h2>
          <input type="text" placeholder="Correo electronico" />
          <input type="password" placeholder="Contraseña" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Terminos y condiciones</label>
          </div>
          <button>Registrarme</button>
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
