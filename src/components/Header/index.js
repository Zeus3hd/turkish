import React from "react";
import MouseIcon from "@material-ui/icons/Mouse";
import {
  Wrapper,
  HeaderContent,
  HeaderText,
  ScrollButton
} from "./Header.style";

const Header = props => {
  return (
    <Wrapper>
      <HeaderContent>
        <HeaderText>
          <h2>Turkish Heights</h2>
          <p>{props.texts.HeaderParagraph}</p>
        </HeaderText>
      </HeaderContent>
      <ScrollButton>
        <MouseIcon />
      </ScrollButton>
    </Wrapper>
  );
};

export default Header;
