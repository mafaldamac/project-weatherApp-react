import React, { useState } from "react";
import "./AtualInfo.css";

export default function AtualInfo(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="AtualInfo">
      <div id="current-info" className="row">
        <div id="col-sm-12 Col-md-4">
          <br />
          <p id="current-date">2021 March 14th</p>
          <p id="current-hour">18:16</p>
        </div>
        <div id="col-sm-12 Col-md-4">
          <p id="search-city">{props.city}</p>
          <img src={props.iconUrl} alt="icon" />
          <p id="description-weather">{props.description}</p>
        </div>
        <div id="col-sm-12 Col-md-4">
          <br />
          <div>
            <span id="temp-shown"> {temperature} </span>
            <span className="TempUnits">
              {" "}
              <a href="./" onClick={showCelsius} id="celsius-link">
                ºC
              </a>{" "}
              |{" "}
              <a href="./" onClick={showFarehrenheit} id="fahrenheit-link">
                ºF
              </a>
            </span>
          </div>
          <div>
            <br />
            <span className="windTemps">Wind speed (Km/h)</span>
            <p id="wind-speed">{props.wind}</p>
          </div>
          <div>
            <span className="humTemps"> Humidity %</span>
            <p id="humidity">{props.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
