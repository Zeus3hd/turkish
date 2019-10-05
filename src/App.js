import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import styled from "styled-components";
import Quotes from "./components/Quotes";
import Packages from "./components/Packages";
import Map from "./components/Map";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GalleryPage from "./components/GalleryPage";
import _404 from "./components/404";

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
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Wrapper>
            <Features />
            <Team />
          </Wrapper>
          <Gallery />
          <Wrapper style={{ top: 0, background: "#555555" }}>
            <Quotes />
          </Wrapper>
          <Packages />
          <Map />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/gallery">
          <GalleryPage />
        </Route>
        <Route>
          {/*eslint-disable-next-line*/}
          <_404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
