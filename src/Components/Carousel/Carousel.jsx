import React, { useState, useEffect } from "react";
import "./Carousel.css";
import carouselImg1 from "../../assets/carousel-1.png";
import carouselImg2 from "../../assets/carousel-2.png";
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the width state
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return the current width
  return width;
}
const Carousel = () => {
  const width = useWindowWidth();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(0);
  const [step, setStep] = useState(width >= 591 ? -460 : -230);
  const [indicatorCount, setIndicatorCount] = useState(
    width <= 591 ? 6 : width <= 992 ? 4 : 3
  );
  const [imgsCount, setImgsCount] = useState(6);

  useEffect(() => {
    setStep(width <= 590 ? -230 : width <= 991 ? -460 : -920);
    setIndicatorCount(width >= 591 ? 3 : 6);
    setScrollPosition(0);
    setActiveIndicatorIndex(0);
  }, [width]);
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
      <div className="carousel-wrapper"></div>
      <div className="history__carousel">
        <div className="history__carousel-container">
          <div className="carousel-view">
            <div
              id="item-list"
              style={{ transform: `translateX(${scrollPosition}px)` }}
              className="item-list"
            >
              {Array(imgsCount)
                .fill(undefined)
                .map((_, index) => (
                  // add a key prop here
                  <div key={index} className="imgs">
                    {Array(2)
                      .fill(undefined)
                      .map((_, index) => (
                        <img
                          key={index}
                          src={index % 2 === 0 ? carouselImg1 : carouselImg2}
                          alt="carousel"
                        />
                      ))}
                  </div>
                ))}
            </div>
          </div>
          <div className="indicators">
            {Array(indicatorCount)
              .fill(undefined)
              .map((_, index) => (
                <div
                  onClick={() => handleClick(index)}
                  className={`indicator ${
                    activeIndicatorIndex === index ? "active" : ""
                  }`}
                  key={index}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
