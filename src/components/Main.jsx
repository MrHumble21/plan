import React from "react";
import { html, css } from "./data";
import Message from "./Message";
import Plans from "./Plans";

function Main() {
  return (
    <>
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
