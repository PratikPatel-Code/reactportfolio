import React from "react";
import "../css/nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <ul className="">
        <li>
          <a
            className=""
            aria-current="page"
            onClick={() => props.setPage("about")}
            href="#"
          >
            About Me
          </a>
        </li>
        <li>
          <a className="" href="#" onClick={() => props.setPage("portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a className="" onClick={() => props.setPage("contact")} href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
