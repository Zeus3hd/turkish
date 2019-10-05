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
          <p>
            The resulting icon can be used as is, or included as a child for
            other Material-UI components that use icons.
          </p>
        </HeaderText>
      </HeaderContent>
      <ScrollButton>
        <MouseIcon />
      </ScrollButton>
    </Wrapper>
  );
};

export default Header;
