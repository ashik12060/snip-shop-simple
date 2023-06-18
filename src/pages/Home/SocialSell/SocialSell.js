import React from "react";
import img from "../../images/colorful-circle-with-circle-that-says-circle-it.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../images/sunglasses.jpg";
import img2 from "../../images/shoe.jpg";
import img3 from "../../images/watch.jpg";
import youngHandsome from '../../images/young-handsome-man-choosing-clothes-shop.jpg';
import './SocialSell.css';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialSell = () => {
  return (
    <div>
      <section className="overflow-hidden">
      <div>
        <div className="d-flex pt-5 row  overflow-hidden" data-aos="fade-down"  data-aos-duration="2000">
          {/*  */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12  overflow-hidden">
            <div className="parent container">
            <img
              src={youngHandsome}
              className="w-lg-100 w-md-100 w-sm-75 w-75 h-75 ms-5" alt="...."/>
              <div className="position-styles  d-flex flex-col ">
                <div className="position-material">
                <p className="text-red"> <FontAwesomeIcon className="text-primary fs-4" icon={faFacebook} /></p>
              <img className=" img-sizing" src={img1} alt="..."/>
              <p className="pt-3">$12</p>
                </div>
                <div className="position-material">
                <p className="text-red"> <FontAwesomeIcon icon={faInstagram} style={{color:'#E4405F', fontSize:'22px'}}/> </p>
              <img className=" img-sizing" src={img2} alt="..."/>
              <p className="pt-3">$20</p>
                </div>
                <div className="position-material">
                <p className="text-red"> <FontAwesomeIcon icon={faTwitter} style={{color: "#00acee", fontSize:'22px'}} /></p>
              <img className=" img-sizing" src={img3} alt="..."/>
              <p className="pt-3">$18</p>
                </div>
              </div>
            </div>

            
          </div>
          <div
            className="mt-5 pt-5 col-lg-6 col-md-12 col-sm-12
           col-12 ps-md-5 pb-md-5 ps-sm-5 ps- pb-sm-5 ps-5 pb-5 overflow-hidden"
          >
            <h1 className="fw-bold ">Sell Easily on Socialmedia</h1>
            <p className="fw-bold py-3">
             Life is hard enough. Let us make it a little easier.
            </p>
            
             <a href="#" className="fw-bold"> See All <FontAwesomeIcon icon={faArrowRight} /></a>
          
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default SocialSell;
