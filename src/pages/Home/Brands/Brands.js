import React from "react";
import "./Brands.css";
import bmw from "../../images/bmw.jpeg";
import adidas from "../../images/adidas.png";
import apple from "../../images/apple.png";
import fila from "../../images/fila.png";
import mi from "../../images/mi.jpg";
import nike from "../../images/nike.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Brands = () => {
  return (
    <div>
      <section className="my-5 container row overflow-hidden">
        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column "  data-aos="fade-up"  data-aos-duration="3000" >
        {/* */}
          <div className="col-5 ps-5 ps-sm-5 me-sm-5 me-md-5 me-lg-5 text-lg-left text-container">
            <h1 className="fw-bold">Explore Most Popular Brands</h1>
            <p className="fw-bold pt-4">
              Life is hard enough already. let us make it easier.
            </p>
            <a className="fw-bold fs-6 " href="#">See All <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>

          <div className="col-7 ms-5 bg-styles">
            <div className="row ">
              

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container  col-5">
                <div className="logo-styles">
                  <img className="logo-container" src={apple} alt="..." />
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container  col-5">
                <div className="logo-styles">
                  <img className="logo-container" src={fila} alt="..." />
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div className="logo-styles">
                  <img className="logo-container" src={nike} alt="..." />
                </div>
                
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div className="logo-styles">
                  <img className="logo-container" src={mi} alt="..." />
                </div>
                
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div className="logo-styles">
                  <img
                    className="logo-container"
                    src={bmw}
                    alt="..."
                  />
                </div>
                
              </div>

              <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column card-container col-5">
                <div className="logo-styles">
                  <img className="logo-container" src={adidas} alt="..." />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
