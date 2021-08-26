import React from "react";
import "../css/portfolio.css";

function Portfolio({ linkHandler }) {
  return (
    <section className="container">
      <div className="row text-center">
        <h1 className="">Portfolio</h1>

        <div className="projectContainer">
          <div className="projectImage" id="proj1">
            <div
              className="overlay"
              onClick={() =>
                linkHandler(
                  "https://mbalasuriyar.github.io/Find-an-Anime-For-You/"
                )
              }
            >
              <h2>
                AnimeFinder!!!{" "}
                <span
                  class="githubLink"
                  onClick={() =>
                    linkHandler(
                      "https://github.com/MBalasuriyar/Find-an-Anime-For-You"
                    )
                  }
                >
                  GitHub
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="projectContainer col-sm-6 my-3">
          <div className="projectImage" id="proj2">
            <div
              className="overlay"
              onClick={() =>
                linkHandler("https://stormy-brushlands-54059.herokuapp.com/")
              }
            >
              <h2>
                Comic Chums!{" "}
                <span
                  class="githubLink"
                  onClick={() =>
                    linkHandler("https://github.com/thuluong249/comicchum")
                  }
                >
                  GitHub
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="projectContainer ">
          <div className="projectImage" id="proj3">
            <div
              className="overlay"
              onClick={() =>
                linkHandler(
                  "https://cryptic-mesa-22152.herokuapp.com/?id=611c8bd874e71e0016f17958"
                )
              }
            >
              <h2>
                Fun Finder{" "}
                <span
                  class="githubLink"
                  onClick={() =>
                    linkHandler(
                      "https://github.com/PratikPatel-Code/Nosql-Homework-Workout-Tracker"
                    )
                  }
                >
                  GitHub
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="projectContainer col-sm-6 my-3">
          <div className="projectImage" id="proj5">
            <div
              className="overlay"
              onClick={() =>
                linkHandler(
                  "https://pratikpatel-code.github.io/weatherdashboard/"
                )
              }
            >
              <h2>
                Weather Dashboard{" "}
                <span
                  class="githubLink"
                  onClick={() =>
                    linkHandler(
                      "https://github.com/PratikPatel-Code/weatherdashboard"
                    )
                  }
                >
                  GitHub
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="projectContainer col-sm-6 my-3">
          <div className="projectImage" id="proj6">
            <div
              className="overlay"
              onClick={() =>
                linkHandler("https://rocky-headland-86478.herokuapp.com/")
              }
            >
              <h2>
                Note Taker{" "}
                <span
                  class="githubLink"
                  onClick={() =>
                    linkHandler("https://github.com/PratikPatel-Code/NoteTaker")
                  }
                >
                  GitHub
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
