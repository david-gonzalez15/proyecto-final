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
  Register
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
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router>
        <Header />
        <Switch>
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
