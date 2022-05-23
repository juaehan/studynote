import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";



const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
`;

const App = () => {
  return (
    <Container>
      <Reset />
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default App;
