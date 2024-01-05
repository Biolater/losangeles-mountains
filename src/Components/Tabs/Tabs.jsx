import "./Tabs.css";
import React, { useState } from "react";
import tabContentBg1 from "../../assets/tab-content-bg-1.png";
import tabContentBg2 from "../../assets/tab-content-bg-2.png";

const Tabs = () => {
  const TabButtonTexts = [
    { text: "MOUNTAIN 1", img: tabContentBg1 },
    { text: "MOUNTAIN 2", img: tabContentBg2 },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabs">
      <div className="tab-bg">
        <div className="container">
          <div className="tab-select">
            {TabButtonTexts.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`tab-button ${
                  activeTab === index ? "tab-button__active" : ""
                }`}
              >
                <span>{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="tab-content">
        {TabButtonTexts.map((item, index) => (
          <div
            key={index}
            className={`tab-image ${activeTab === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
        ))}
        
      </div>
    </section>
  );
};

export default Tabs;
