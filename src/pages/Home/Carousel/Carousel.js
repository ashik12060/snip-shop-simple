import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../images/camera-equipment-capturing-single-macro-object-generative-ai.jpg";
import img2 from "../../images/colorful-circle-with-circle-that-says-circle-it.jpg";
import img3 from "../../images/high-angle-shot-person-holding-camera-lens.jpg";
import img4 from "../../images/photo-camera-balancing-with-yellow-background.jpg";
import img5 from "../../images/tech-device-with-nature-background.jpg";

import "./Carousel.css";
const Carousel = () => {
  return (
    <>
      <OwlCarousel
        items={1}
        autoplay={true}
        navText={["preview", "next"]}
        className="owl-theme owl-container ms-5"
        nav
        loop
        margin={10}
      >
        <div className="item">
          <img className="img-container" src={img1} alt="image-slider1" />
        </div>
        <div className="item">
          <img className="img-container" src={img2} alt="image-slider2" />
        </div>
        <div className="item">
          <img className="img-container" src={img3} alt="image-slider3" />
        </div>
        <div className="item">
          <img className="img-container" src={img4} alt="image-slider4" />
        </div>
        <div className="item">
          <img className="img-container" src={img5} alt="image-slider5" />
        </div>
      </OwlCarousel>
    </>
  );
};

export default Carousel;
