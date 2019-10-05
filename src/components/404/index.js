import React from "react";
import Header from "../Header";
import headerr3 from "../../assets/headerr3.jpeg";

const _404 = () => {
  return (
    <div>
      <Header image={headerr3} />
      <h1
        style={{
          alignSelf: "center",
          textAlign: "center",
          margin: "3rem",
          padding: "3rem"
        }}
      >
        Page Not Found
      </h1>
    </div>
  );
};

export default _404;
