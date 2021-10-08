/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

import {
  Carousel,
  CarouselProvider,
  PreviousButton,
  NextButton,
} from "react-slim-carousel";
import "../../assets/css/sliderStyles.css";

// Material UI Icons
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Image imports
//import clif from "../../assets/img/partners/brands/partners-clif.png";
//import fritolay from "../../assets/img/partners/brands/partners-fritolay.png";
//import kraftheinz from "../../assets/img/partners/brands/partners-kraftheinz.png";
//import lifewtr from "../../assets/img/partners/brands/partners-lifewtr.png";
//import mars from "../../assets/img/partners/brands/partners-mars.png";
//import pepsi from "../../assets/img/partners/brands/partners-pepsi.png";
//import redbull from "../../assets/img/partners/brands/partners-redbull.png";
//import aramark from "../../assets/img/partners/operators/partners-aramark.png";
//import avi from "../../assets/img/partners/operators/partners-avi.png";
//import buffalo from "../../assets/img/partners/operators/partners-buffalo.png";
//import canteen from "../../assets/img/partners/operators/partners-canteen.png";
//import csvending from "../../assets/img/partners/operators/partners-csvending.png";
//import premier from "../../assets/img/partners/operators/partners-premier.png";
//import sodexo from "../../assets/img/partners/operators/partners-sodexo.png";

const images = [
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-clif.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-fritolay.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-kraftheinz.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-lifewtr.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-mars.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-pepsi.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/brands/partners-redbull.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-aramark.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-avi.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-buffalo.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-canteen.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-csvending.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-premier.png",
  "https://advana-image-assets.s3.amazonaws.com/partners/operators/partners-sodexo.png",
];

export default function Clients() {
  const slides = images.map((image) => (
    <img
      key={image}
      src={image}
      alt="img"
      style={{ width: "150px", height: "150px" }}
      draggable={false}
    />
  ));

  return (
    <CarouselProvider>
      <div className="App">
        <div className="slider-container">
          <div className="prevBtnContainer">
            <PreviousButton>
              <ArrowBackIosIcon className="prevSVG" />
            </PreviousButton>
          </div>
          <Carousel
            autoPlay={false}
            autoSize={true}
            centerMode={true}
            draggable={true}
            easing="ease-in-out"
            edgeFriction={0.5}
            gap={25}
            infinite
            initialSlide={0}
            interval={5000}
            orientation="horizontal"
            playDirection="normal"
            slidesToScroll={2}
            slideSpeed={1500}
            threshold={0.2}
            visibleSlides={5}
          >
            {slides}
          </Carousel>
          <div className="nextBtnContainer">
            <NextButton>
              <ArrowForwardIosIcon className="nextSVG" />
            </NextButton>
          </div>
        </div>
      </div>
    </CarouselProvider>
  );
}
