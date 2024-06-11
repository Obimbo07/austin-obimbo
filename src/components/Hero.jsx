import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/hero.css";

const slidesData = [
  {
    backgroundImage: "vision.jpg",
    heading: "Hey there, I am Austin Obimbo",
    texts: [
      "Certified Software Engineer",
      "Vetted Data Operations Analyst",
      "IoT Devices Software Architecture Manager",
      "Cloud Developer & DevOps Engineer",
    ],
  },
  {
    backgroundImage: "IMG_3892.jpg",
    heading: "Welcome to My Portfolio",
    texts: [
      "Experienced in Various Technologies",
      "Passionate About Innovation",
      "Dedicated to Excellence",
      "Let's Build the Future Together",
    ],
  },
  {
    backgroundImage: "IMG_3892.jpg",
    heading: "Welcome to My Portfolio",
    texts: [
      "Experienced in Various Technologies",
      "Passionate About Innovation",
      "Dedicated to Excellence",
      "Let's Build the Future Together",
    ],
  },
  {
    backgroundImage: "IMG_3892.jpg",
    heading: "Welcome to My Portfolio",
    texts: [
      "Experienced in Various Technologies",
      "Passionate About Innovation",
      "Dedicated to Excellence",
      "Let's Build the Future Together",
    ],
  },
  {
    backgroundImage: "IMG_3892.jpg",
    heading: "Welcome to My Portfolio",
    texts: [
      "Experienced in Various Technologies",
      "Passionate About Innovation",
      "Dedicated to Excellence",
      "Let's Build the Future Together",
    ],
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="hero-slider-container" {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className="hero-slide" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
          <div className="hero-content">
            <h2 className="hero-heading">{slide.heading}</h2>
            <div>
              {slide.texts.map((text, idx) => (
                <h3 key={idx} className="hero-text">{text}</h3>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
