import React, { useState } from "react";
import Search from "./Search";
import "./styles.css";
import axios from "axios";

import AtualInfo from "./AtualInfo";
import "./AtualInfo";

export default function App() {
  let [city, setCity] = useState(``);
  let [temperature, setTemperature] = useState(``);
  let [wind, setWind] = useState(``);
  let [humidity, setHumidity] = useState(``);
  let [description, setDescription] = useState(``);
  let [iconUrl, setIconUrl] = useState(``);

  const searchCity = (cityName) => {
    setCity(cityName);
    let apiKey = "be65b4815a4ad8711d696d04653d1f47";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    axios.get(url).then((response) => {
      setTemperature(Math.round(response.data.main.temp));
      setWind(Math.round(response.data.wind.speed));
      setHumidity(Math.round(response.data.main.humidity));
      setDescription(response.data.weather[0].description);
      setIconUrl(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    });
  };
  return (
    <div className="App">
      <br />
      <Search onSearch={searchCity} />
      <br />
      <AtualInfo
        temperature={temperature}
        city={city}
        wind={wind}
        humidity={humidity}
        description={description}
        iconUrl={iconUrl}
      />
      <div>
        <footer>
          Weather App
          <br />
          <a
            href="https://github.com/mafaldamac/project-weatherApp-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source Code by Mafalda Lourenço
          </a>
        </footer>
      </div>
    </div>
  );
}
