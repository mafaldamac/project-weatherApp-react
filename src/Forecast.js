import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <h1>Forecast</h1>
      <button
        type="button"
        className="btn btn-outline-warning"
        id="forecast-button"
      >
        To see the forecast by days click here!
      </button>
      <div className="Col-sm-0 col-md-1" />
      <div className="Row" id="forecast-info">
        <div className="Col-sm-0 col-md-1" />
        <div className="Col-sm-0 col-md-1" />
      </div>
    </div>
  );
}
