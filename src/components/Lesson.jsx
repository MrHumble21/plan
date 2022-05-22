import React from "react";

function Lesson(props) {
  return (
    <div className="mt-5 container">
      <div className="card border-info mb-3">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
