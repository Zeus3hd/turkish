import React from "react";
import Header from "../Header";
import Gallery from "../Gallery";
const _404 = () => {
  return (
    <div>
      <Header />
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
