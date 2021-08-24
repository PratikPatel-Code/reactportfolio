import React from "react";
import "../css/nav.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Nav(props) {
  return (
    <nav className="">
      <div className="">
        <div className="" id="">
          <div className="">
            <a
              className=""
              aria-current="page"
              onClick={() => props.setPage("about")}
              href="#"
            >
              About Me
            </a>
            <a className="" href="#" onClick={() => props.setPage("portfolio")}>
              Portfolio
            </a>
            <a className="" onClick={() => props.setPage("contact")} href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
