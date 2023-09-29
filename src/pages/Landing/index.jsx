import React from "react";
import "./style.css";
import { useCustomSelector } from "../../redux/customHooks/customSelector.js";
import ItemCard from "../../components/base/ItemCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../../components/base/Button";
import { useNavigate } from "react-router-dom";


const Landing = () => {

  const navigate = useNavigate();


  const items = useCustomSelector();
  const allItems = items.items;
  const itemsToDisplay = allItems.slice(0, 9);

  const itemsPerSlide = 3;
  const slides = [];
  for (let i = 0; i < itemsToDisplay.length; i += itemsPerSlide) {
    slides.push(itemsToDisplay.slice(i, i + itemsPerSlide));
  }



  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <div className="landing-page-header">
        Rent <span className="green-text">anything</span> you need.
        <br></br><span className="green-text">whenever </span>you need it.
        </div>
        <div className="landing-page-subheader">
        Enhance your environmental blueprint, save money and space, and borrow whatever you need.
        </div>
        <div className="landing-page-button">
        <Button
        className="landing-page-button"
        text="List Item"
        onClick={() => navigate("/add-item")}
      />
      </div>
      </div>
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          stopOnHover={false}
          transitionTime={1000}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="horizontal-carousel">
                {slide.map((item, itemIndex) => (
                  <div key={itemIndex} className="item-carousel">
                    <ItemCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Landing;
