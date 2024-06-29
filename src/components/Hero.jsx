import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/hero.css";

const slidesData = [
  {
    className: "slide-1", // Use class names instead of backgroundImage
    heading: "Hey there, I am Austin Obimbo",
    texts: [
      "Certified Software Engineer",
      "Vetted Data Operations Analyst",
      "IoT Software Architect",
    ],
  },
  {
    className: "slide-1",
    heading: "Welcome to My Portfolio",
    texts: [
      "Experienced in Various Technologies",
      "Passionate About Innovation",
      "Dedicated to Excellence",
      "Let's Build the Future Together",
    ],
  },
  {
    className: "slide-2",
    heading: "Collaborator and Team Builder",
    texts: [
      "A remote pair programmer",
      "Proactive Team Leader",
      "Focus on Product Quality over Team Quantity",
      "I Bring a Sparkling Light to Teams",
    ],
  },
  {
    className: "slide-2",
    heading: "Agile Software Engineer",
    texts: [
      "A Natural Sense of Attention to Detail",
      "Integrates Understanding of IoT Devices",
      "Expert in Agile Methodologies",
      "Let's Innovate Together",
    ],
  },
  {
    className: "slide-2",
    heading: "Data Driven",
    texts: [
      "Experienced in Data Analysis and Interpretation",
      "Passionate About Leveraging Data for Insights",
      "Committed to Data-Driven Decision Making",
      "Let's Harness the Power of Data Together",
    ],
  },
];

const SocialLinks = () => {
  return(
    <>
      <div></div>
    </>
  )
}
const Hero = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
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
        <div
          key={index}
          className={`hero-slide ${slide.className}`}
        >
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
