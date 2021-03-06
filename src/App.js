import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./css/app.css";

function App() {
  const [page, setPage] = useState("about");

  const linkHandler = (link) => {
    console.log(link);
    window.open(link);
  };

  const renderPage = (currentPage) => {
    if (currentPage === "about") {
      return <About />;
    } else if (currentPage === "contact") {
      return <Contact />;
    } else if (currentPage === "portfolio") {
      return <Portfolio linkHandler={linkHandler} />;
    }
  };

  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <div id="background">
      <div id="overlay">
        <Nav page={page} setPage={handlePageChange} linkHandler={linkHandler} />
        {renderPage(page)}
      </div>
      <Footer linkHandler={linkHandler} />
    </div>
  );
}

export default App;
