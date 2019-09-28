import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";
const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  z-index: 2;
  background: ${props => props.colors};
  transition: 0.5s ease-in-out;
  display: flex;
  justify-content: space-around;
  position: fixed;
  border-radius: 0 0 5px 5px;
  .nav-buttons {
    color: ${props => props.buttonColors};
    font-weight: 800;
    &:hover {
      color: tomato;
      transition: 0.4s;
    }
  }
`;
const Navbar = () => {
  const [navbarColors, setColor] = useState("none");
  const [navbarButtonsColors, setNavbarButtonsColors] = useState("white");

  useEffect(() => {
    const changeNavColors = () => {
      if (window.pageYOffset >= 200) {
        setColor("white");
        setNavbarButtonsColors("#555555");
      } else {
        setColor("none");
        setNavbarButtonsColors("white");
      }
    };
    window.addEventListener("scroll", changeNavColors);
    return () => window.removeEventListener("scroll", changeNavColors);
  });
  return (
    <Wrapper colors={navbarColors} buttonColors={navbarButtonsColors}>
      <Button className="nav-buttons">Turkish Heights</Button>
      <Button className="nav-buttons">
        <HomeIcon />
      </Button>
      <Button className="nav-buttons">
        <PhotoLibraryIcon />
      </Button>
      <Button className="nav-buttons">
        <InfoIcon />
      </Button>
      <Button className="nav-buttons">
        <MenuIcon />
      </Button>
    </Wrapper>
  );
};

export default Navbar;
