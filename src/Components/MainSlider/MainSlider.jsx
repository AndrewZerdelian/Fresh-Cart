import React from "react";
//import Style from "./MainSlider.module.css";
import Slider1 from "../../Assets/slider-image-1.jpeg";
import Slider2 from "../../Assets/slider-image-2.jpeg";
import Slider3 from "../../Assets/slider-image-3.jpeg";

import Slider5 from "../../Assets/grocery-banner-2.jpeg"
import Slider6 from "../../Assets/slider-2.jpeg"
import Slider from "react-slick";
//import Blog1 from "../../Assets/blog-img-1.jpeg";
//import Blog2 from "../../Assets/blog-img-2.jpeg";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <main>
      <div className="row ">
        <div className="col-md-12 container ">
          <Slider {...settings}>
            <img height={300} src={Slider1} className="w-100" alt="slider" />
            <img height={300} src={Slider2} className="w-100" alt="slider" />
            <img height={300} src={Slider3} className="w-100" alt="slider" />
            <img height={300} src={Slider5} className="w-100" alt="slider" />
            <img height={300} src={Slider6} className="w-100" alt="slider" />
          </Slider>
        </div>
      
      </div>
    </main>
  );
}


/** OLD
         * import React from "react";
//import Style from "./MainSlider.module.css";
import Slider1 from "../../Assets/slider-image-1.jpeg";
import Slider2 from "../../Assets/slider-image-2.jpeg";
import Slider3 from "../../Assets/slider-image-3.jpeg";

import Slider5 from "../../Assets/grocery-banner-2.jpeg"
import Slider6 from "../../Assets/slider-2.jpeg"
import Slider from "react-slick";
import Blog1 from "../../Assets/blog-img-1.jpeg";
import Blog2 from "../../Assets/blog-img-2.jpeg";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <main>
      <div className="row p-5 ">
        <div className="col-md-10 container ">
          <Slider {...settings}>
            <img height={500} src={Slider1} className="w-100" alt="slider" />
            <img height={500} src={Slider2} className="w-100" alt="slider" />
            <img height={500} src={Slider3} className="w-100" alt="slider" />
            <img height={500} src={Slider5} className="w-100" alt="slider" />
            <img height={500} src={Slider6} className="w-100" alt="slider" />
          </Slider>
        </div>
        <div className="col-md-2">
          <img src={Blog1} height={250 } className="w-100 pb-2" alt="blog" />
          <img src={Blog2} height={250 } className="w-100 pt-2" alt="blog" />
        </div>
      </div>
    </main>
  );
}

         */