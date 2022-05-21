/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Message() {
  return (
    <div className="alert alert-dismissible alert-info">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>Heads up!</strong> This{" "}
      <a href="#" className="alert-link">
        alert needs your attention
      </a>
      , but it's not super important.
    </div>
  );
}

export default Message;
