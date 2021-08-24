import React from "react";
import "../css/footer.css";
import resume from "../images/Pratik-Patel+(1).pdf";

function Footer({ linkHandler }) {
  return (
    <footer className="">
      <ul className="">
        <li className="">
          <a
            className=""
            href="#"
            onClick={() => linkHandler("https://github.com/PratikPatel-Code")}
          >
            Github
          </a>
        </li>
        <li className="">
          <a
            className=""
            href="#"
            onClick={() =>
              linkHandler(
                "https://www.linkedin.com/in/pratik-teeke-patel-17182a36/"
              )
            }
          >
            LinkedIn
          </a>
        </li>
        <li className="">
          <a
            className=""
            href="#"
            onClick={() =>
              linkHandler(
                "https://drive.google.com/file/d/1Wq9JTwJfDPTNYrnWkqcZp7MK8sDBopG0/view?usp=sharing"
              )
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
