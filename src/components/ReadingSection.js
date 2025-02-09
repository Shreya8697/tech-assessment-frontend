import React from "react";
import './style.css';

const ReadingSection = ({ activeTab, setActiveTab, readingContent }) => {
  return (
    <div className="container">
      <div className="reading-section">
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === "section1" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("section1")}
          >
            Current Flights
          </button>
          <button
            className={`tab-button ${activeTab === "section2" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("section2")}
          >
            New Flights Lines
          </button>
        </div>
        <div className="reading-content">
          <div dangerouslySetInnerHTML={{ __html: readingContent[activeTab] }} />
        </div>
      </div>
    </div>
  );
};

export default ReadingSection;
