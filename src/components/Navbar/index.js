import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";
import {Wrapper, SideBar} from './Navbar.style';

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
