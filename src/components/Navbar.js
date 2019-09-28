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
  box-shadow: ${props =>
    props.colors === "none"
      ? "none"
      : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"};
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

const SideBar = styled.div`
  position: fixed;
  width: 50%;
  max-width: 400px;
  height: 100%;
  background: rgba(220, 200, 200, 0.8);
  left: ${props => (props.sideBarLeft ? "0" : "-50%")};
  transition: 0.5s;
  ul {
    list-style-type: none;
    padding: 3rem 0;
    margin: 0;
    li {
      padding: 1rem 0;
      margin: 0;
      padding-left: 0.6rem;
    }
  }
`;
const Navbar = () => {
  const [navbarColors, setColor] = useState("none");
  const [navbarButtonsColors, setNavbarButtonsColors] = useState("white");
  const [sideBarLeft, setSideBarLeft] = useState(false);

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
      <Button
        className="nav-buttons"
        onClick={() => setSideBarLeft(!sideBarLeft)}
      >
        <MenuIcon />
      </Button>
      <SideBar sideBarLeft={sideBarLeft}>
        <ul>
          <li>
            <Button className="nav-buttons">Turkish Heights</Button>
          </li>
          <li>
            <Button className="nav-buttons">
              <HomeIcon style={{ padding: "0 1rem" }} /> HOME
            </Button>
          </li>
          <li>
            <Button className="nav-buttons">
              <PhotoLibraryIcon style={{ padding: "0 1rem" }} />
              GALLERY
            </Button>
          </li>
          <li>
            <Button className="nav-buttons">
              <InfoIcon style={{ padding: "0 1rem" }} /> ABOUT US
            </Button>
          </li>
        </ul>
      </SideBar>
    </Wrapper>
  );
};

export default Navbar;
