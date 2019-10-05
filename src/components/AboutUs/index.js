import React from "react";
import Header from "../Header";
import Features from "../Features";
import headerr2 from "../../assets/headerr2.jpeg";

const AboutUs = () => {
  return (
    <div>
      <Header image={headerr2} />
      <Features title={"About us page"} />
    </div>
  );
};

export default AboutUs;
