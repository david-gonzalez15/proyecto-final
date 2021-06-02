import React from "react";
//dependencies
import styled from "styled-components";

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
  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;
const FormConntainer = styled.div`
  width: 50%;
`;
const Form = styled.form``;

const FormLogin = () => {
  return (
    <Container>
      <FormConntainer>
        <Form>
          <input type="text" />
          <input type="text" />
        </Form>
      </FormConntainer>
      <ImgContainer>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c295.png"
          alt=""
        />
      </ImgContainer>
    </Container>
  );
};
export default FormLogin;
