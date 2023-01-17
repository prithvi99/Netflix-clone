import React from "react";
import "./Section.css";
import data from "../../infoSectionData.json";

function Section(props) {
  return (
    <div className="section">
      {data.map((item) => {
        return (
          <div
            className="sectionPart"
            style={{ flexDirection: `${item.rowAlignment}` }}
          >
            <div className="section__text">
              <h1>{item.h1}</h1>
              <h3>{item.h3}</h3>
            </div>

            <div className="section__img">
              <img className="infoSectionImage" src={item.src} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
