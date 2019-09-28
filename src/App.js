import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Feautres";
import Team from "./components/Team";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  top: -50px;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
`;
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Wrapper>
        <Features />
        <Team />
      </Wrapper>
    </div>
  );
}

export default App;
