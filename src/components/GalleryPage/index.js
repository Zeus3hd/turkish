import React from "react";
import Header from "../Header";
import Gallery from "../Gallery";
import headerr1 from "../../assets/headerr1.jpeg";
const GalleryPage = () => {
  return (
    <div>
      <Header image={headerr1} />
      <Gallery title={"Gallery Page"} />
    </div>
  );
};

export default GalleryPage;
