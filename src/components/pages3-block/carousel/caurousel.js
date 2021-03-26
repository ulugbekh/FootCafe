import './main.scss'
import {foot} from '../../array-block/array'
import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from '../carousel-item'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  };

    return ( 
        <div className="foot-caro container">
            <h1 className="caro-text">New Foot</h1>
            <div className="caro">
            <div className="caro-ittem">
            <Slider {...settings}>
                {
                    foot.map((item, index) => (
                        <CarouselItem
                            img={item.img}
                            money={item.money}
                            key={index}
                            id={item.id}
                        />
                    ))
                }
            </Slider>
            </div>
            <div className="caro-ittem">
            <Slider {...settings1}>
                {
                    foot.map((item, index) => (
                        <CarouselItem
                            img={item.img}
                            money={item.money}
                            key={index}
                            id={item.id}
                        />
                    ))
                }
            </Slider>
            </div>
            <div className="caro-ittem">
            <Slider {...settings2}>
                {
                    foot.map((item, index) => (
                        <CarouselItem
                            img={item.img}
                            money={item.money}
                            key={index}
                            id={item.id}
                        />
                    ))
                }
            </Slider>
            </div>
            </div>
        </div>
     );
}
 
export default Carousel;