import React, { useState } from "react";
import "./Carousel.css";
import carouselImg1 from "../../assets/carousel-1.png";
import carouselImg2 from "../../assets/carousel-2.png";

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(0);
  const step = -230;

  const handleClick = (index) => {
    setScrollPosition(index * step);
    setActiveIndicatorIndex(index);
  };

  return (
    <section className="history">
      <div className="layer"></div>
      <div className="container">
        <div className="history-header">
          <div className="history-text">
            <h1>01</h1>
            <div className="history__wrap">
              <h4>HISTORY</h4>
              <div className="box"></div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </div>
      <div className="history__carousel">
        <div className="history__carousel-container">
          <div className="carousel-view">
            <div
              id="item-list"
              style={{ transform: `translateX(${scrollPosition}px)` }}
              className="item-list"
            >
              {Array(6)
                .fill(undefined)
                .map((_, index) => (
                  // add a key prop here
                  <img
                    key={index}
                    src={index % 2 === 0 ? carouselImg1 : carouselImg2}
                    alt="carousel"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
