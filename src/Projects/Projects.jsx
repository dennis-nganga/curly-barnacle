import "./Projects.css";
import { useState } from "react";


function Projects(){
    const BuildData = [
      {
        id: 1,
        name: "python weather scraper",
        desc: "finds out weather from google weather Api on entry of valid place name",
      },
      {
        id: 2,
        name: "js weather scraper",
        desc: "finds out weather from duck duck weather Api on entry of valid place name"
      },
      {
        id: 3,
        name: "svelt weather scraper",
        desc: "finds out weather from goose goose goweather Api on entry of valid place name"
      },
      {
        id: 4,
        name: "json weather scraper",
        desc: "finds out weather from duck duck go go weather Api on entry of valid place name"
      },
    ]
  
    return (
        <>
          {BuildData.map((data, index) => (
            <div key={index} className="projects-main">
              <h1>
                <a href={data.id}>{data.name}</a>
              </h1>
              <p
                href={data.id}>{data.desc}
              </p>
            </div>
          ))}
        </>
      );
    };
export default Projects