import React from "react";
import "./Banner.css";
import Carousel from "../Carousel/Carousel";
const Banner = () => {
  return (
    <div className="overflow-hidden">
      <div className="main-container position-relative">
        <div className="container">
          <ul className="d-flex  gap-4 ">
            <li>
              <a href="#">
                <small>Jewelry & Accessories</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Clothing & Shoes</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Home & Living</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Weeding & Party</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Toys & Entertainment</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Art & Collectibles</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Craft Supplies & Tools</small>
              </a>
            </li>
            <li>
              <a href="#">
                <small>Vintage</small>
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <div className="mt-5 me-5">
              <div>
                <small className="fw-bold">100% QUALITY, 100% SATISFACTION</small>
              </div>
              <div>
                <h1 className="fw-bold">Where the world comes to shop.</h1>
              </div>
              <div>
                <p className="fw-bold">
                  Life is Hard enough already. let us make a littel easier,
                  Vision of Snipshop for a better outlook.
                </p>
              </div>
              <div>
                <button className="btn-container">SHOP NOW</button>
              </div>
            </div>

            <div className="mt-5">
              <Carousel />
            </div>
            <div className="mt-5">
              <h1 className="">Hello everyone</h1>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1686999623">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
