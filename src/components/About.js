import React from "react";
import img1 from "../images/Pratik.jpg";
import "../css/about.css";

function About() {
  return (
    <section className="">
      <div className="">
        <h1 className="">Pratik S. Patel</h1>
        {/* <img className="col-6" src={img1} alt="profile" style={{ width: "200px", height: "auto" }} /> */}
        <div className="">
          I am currently enrolled in UConn's Coding Bootcamp to learn Full Stack
          Web Development. I previously worked for 10 years in Hollywood doing
          various movie/tv show production jobs. Some of the bigger projects I
          have worked on are Twilight, X-Men first class, Sons of Anarchy, and
          the Justin Beiber movie. I love the San Antonio Spurs. I watch a lot
          of anime. I desire to be fluent in windings.
        </div>
        <div className="">
          <img src={img1} alt="Pratik" id="Pratik" />
        </div>
      </div>
    </section>
  );
}

export default About;
