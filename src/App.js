//----------------------------------------------------
//https://www.linkedin.com/in/david-gonzalez-portfolio/
//https://github.com/david-gonzalez15/proyecto-final5gfr
//---------------------------------------------------

import React from "react";
//dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Normalize from "react-normalize";
//pages
import {
  Articulo,
  Blog,
  Checkout,
  Foro,
  Home,
  Login,
  Product,
  Register,
  Store
} from "./pages/index";
//layout
import { Header } from "./layout/index";
//style
const GlobalStyle = createGlobalStyle`
  body{
    background: #000;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  body::-webkit-scrollbar {
    width: 9px; 
    background: #000;        
}
  body::-webkit-scrollbar-thumb{
    background: #3B3C3D;
    border-radius: 10px;
  }
  @media (max-width:500px){
    body::-webkit-scrollbar {
    width: 5px; 
    background: #000;        
}
  body::-webkit-scrollbar-thumb{
    background: transparent;
    border-radius: 10px;
  }
  body::-webkit-scrollbar-thumb:active{
    background: #3B3C3D;
    border-radius: 10px;
  }
  }
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router>
        <Header />
        <Switch>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/articulo">
            <Articulo />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/foro">
            <Foro />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
