import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";
import { img } from "../img/Data";
function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {img.map((image) => {
          return <img key={image} src={image} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </>
  );
}

export default CarouselEffect;
