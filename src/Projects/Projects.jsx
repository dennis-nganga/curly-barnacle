import "./Projects.css";
import { useState } from "react";

function Projects() {
  const BuildData = [
    {
      id: 1,
      name: "python weather scraper",
      desc: "finds out weather from google weather Api on entry of valid place name",
    },
    {
      id: 2,
      name: "js weather scraper",
      desc: "finds out weather from duck duck weather Api on entry of valid place name",
    },
    {
      id: 3,
      name: "svelt weather scraper",
      desc: "finds out weather from goose goose goweather Api on entry of valid place name",
    },
    {
      id: 4,
      name: "json weather scraper",
      desc: "finds out weather from duck duck go go weather Api on entry of valid place name",
    },
    {
      id: 1,
      name: "python weather scraper",
      desc: "finds out weather from google weather Api on entry of valid place name",
    },
    {
      id: 2,
      name: "js weather scraper",
      desc: "finds out weather from duck duck weather Api on entry of valid place name",
    },
    {
      id: 3,
      name: "svelt weather scraper",
      desc: "finds out weather from goose goose goweather Api on entry of valid place name",
    },
    {
      id: 4,
      name: "json weather scraper",
      desc: "finds out weather from duck duck go go weather Api on entry of valid place name",
    },
  ];

  return (
    <>
      <h3> some items I've built</h3>

      <div className="wrapper-items">
        <div className="wrapper__projects">
          <div className="wrapper__project item1">
            <div className="title item1">PythonWebscraper</div>
            <div className="proj__desc item1">
              this is my simple web project that gets weather data from google
              weather API
            </div>
            <div className="footer__proj item1">
              <span className="lang item1">Python</span>
            </div>
          </div>
        </div>
        <div className="wrapper__projects">
          <div className="wrapper__project item2">
            <div className="title item2">Nganga.com</div>
            <div className="proj__desc item2">
              simple porfolio website built with reactjs
            </div>
            <div className="footer__proj item2">
              <span className="lang item2">Reactjs</span>
            </div>
          </div>
        </div>
        {/* Below are projects in progress to be added to the list  */}
        {/* <div className="wrapper__projects">
          <div className="wrapper__project item3">
            <div className="title item3">PythonWebscraper2</div>
            <div className="proj__desc item3">
              this is my simple web project that gets weather data from google
              weather API
            </div>
            <div className="footer__proj item3">
              <span className="lang item3">Python</span>
          </div>
        </div>
        </div> */}
        {/* <div className="wrapper__projects">
          <div className="wrapper__project item4">
            <div className="title item3">PythonWebscraper3</div>
            <div className="proj__desc item4">
              this is my simple web project that gets weather data from google
              weather API
            </div>
            <div className="footer__proj item4">
              <span className="lang item4">Python</span>
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
}
export default Projects;
