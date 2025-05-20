import React from 'react'
import CarouselEffect from '../../components/Carousel/CarouselEffect';
import Catagory from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import LayOut from "../../components/LayOut/LayOut"

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing