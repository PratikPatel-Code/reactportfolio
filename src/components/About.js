import React from "react";
import pratik from "../images/Pratik.jpg";
//import "../css/about.css";

function About() {
  return (
    <section className="container">
      <div className="row text-center">
        <h1 className="col-12 my-3 p-4 opaque">Hello World!</h1>
        {/* <img className="col-6" src={pratik} alt="profile" style={{ width: "200px", height: "auto" }} /> */}
        <div className="col-md-12 col-lg-6 opaque py-3">
          I am currently enrolled in UConn's Coding Bootcamp to learn Full Stack
          Web Development. I previously worked for 10 years in Hollywood doing
          various movie/tv show production jobs. Some of the bigger projects I
          have worked on are Twilight, X-Men first class, Sons of Anarchy, and
          the Justin Beiber movie. I love the San Antonio Spurs. I watch a lot
          of anime. I desire to be fluent in windings.
        </div>
        <div className="col-md-12 col-lg-6 p">
          <img src={pratik} alt="pratik" id="pratik" />
        </div>
      </div>
    </section>
  );
}

export default About;
