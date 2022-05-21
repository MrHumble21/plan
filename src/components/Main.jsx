import React from "react";
import { html, css } from "./data";
import Message from "./Message";
import Navbar from "./Navbar";
import Plans from "./Plans";

function Main() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="google_translate_element"></div>
      </div>
      <div className="container  mt-5">
        <Message />
      </div>
      <div className="container">
        <Plans css={html} />
      </div>
    </>
  );
}

export default Main;
