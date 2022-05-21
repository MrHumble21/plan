/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { html, css, js, react } from "./data";
import { Link } from "react-router-dom";

function Plans(props) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            HTML5
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div class="list-group">
              {html.map((value, i) => (
                <Link
                  to={value.replace(/ /g, "") }
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  {i + 1} - {value}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            CSS3
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {css.map((value, i) => (
              <a
                href="#"
                class="list-group-item list-group-item-action "
                aria-current="true"
              >
                {i + 1} - {value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            JavaScript
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {js.map((value, i) => (
              <a
                href="#"
                class="list-group-item list-group-item-action "
                aria-current="true"
              >
                {i + 1} - {value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            React
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {react.map((value, i) => (
              <a
                href="#"
                class="list-group-item list-group-item-action "
                aria-current="true"
              >
                {i + 1} - {value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
