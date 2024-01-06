import "./Tabs.css";
import React, { useState } from "react";
import tabContentBg1 from "../../assets/tab-content-bg-1.png";
import tabContentBg2 from "../../assets/tab-content-bg-2.png";

const Tabs = () => {
  const TabButtonTexts = [
    { text: "MOUNTAIN 1", img: tabContentBg1 },
    { text: "MOUNTAIN 2", img: tabContentBg2 },
  ];
  const scheduleData = [
    {
      content: (
        <div className="schedule-dates">
          <div className="date">
            <span>25 Nov 2016</span>
            <span>Vestibulum viverra</span>
          </div>
          <div className="date m-1">
            <span>28 Nov 2016</span>
            <span>Vestibulum viverra</span>
          </div>
          <div className="date m-2">
            <span>18 Dec 2016</span>
            <span>Vestibulum viverra</span>
          </div>
          <div className="date">
            <span>7 Jan 2017</span>
            <span>Vestibulum viverra</span>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="schedule-dates">
          <div className="date m-3">
            <span>17 Nov 2016</span>
            <span>Vestibulum viverra</span>
          </div>
          <div className="date">
            <span>13 Dec 2016</span>
            <span>Vestibulum viverra</span>
          </div>
          <div className="date m-4">
            <span>28 Dec 2016</span>
            <span>Vestibulum viverra</span>
          </div>
          <div className="date">
            <span>9 Feb 2017</span>
            <span>Vestibulum viverra</span>
          </div>
        </div>
      ),
    },
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
        <div className="container">
          {TabButtonTexts.map((_, index) => (
            <div className={`schedule ${index === activeTab ? "active" : ""}`}>
              <h4>SCHEDULE</h4>
              {scheduleData[index].content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
