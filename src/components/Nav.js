import React from "react";
import "../css/nav.css";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul
          class=" nav justify-content-center"
          class="navbar-nav"
          style="font-weight: bold;"
        >
          <li class=" nav-item active">
            <a style="font-size: 25px;" class="nav-link" href="index.html">
              About Me
            </a>
          </li>
          <li class="nav-item active">
            <a style="font-size: 25px;" class="nav-link" href="about.html">
              Portfolio
            </a>
          </li>
          <li class="nav-item active">
            <a style="font-size: 25px;" class="nav-link" href="contact.html">
              Contact Me <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
