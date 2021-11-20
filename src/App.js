import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { cities } from './transfer/citiesDates';

const myApi = process.env.REACT_APP_MY_API_ID;
//const myApi = '25d05ff950a8ea005b0e48e3e909b68d';

const App = () => {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('Pilsen');

  // const handleButtonClick = (location) => {
  //   setCity(location)
  // }

  const handleSelector = (event) => {
    setCity(event.target.value)
  }

  const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApi}`)
      .then(response => response.json())
      .then(data => { setWeather(data) })

    //.then(data => { console.log(data) })
  }

  const fetchForecast = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${myApi}`)
      .then(response => response.json())
      .then(data => { setForecast(data.list.filter((_, index) => index % 8 === 0)) })
  }
  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },
    [city]);

  //console.log(weather);
  //console.log(forecast);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={handleSelector}
          >
            {cities.map((city) =>
              <option key={city} value={city}>{city}</option>)}
          </select>
        </div>

        <div className="weather">
          {/*  <div className="button-group">
            <button onClick={() => handleButtonClick('Tenerife')} className="button">Tenerife</button>
            <button onClick={() => handleButtonClick('Prague')} className="button">Prague</button>
            <button onClick={() => handleButtonClick('London')} className="button">London</button>
  </div>*/}
          <Weather weather={weather} />


          <div className="weather__forecast" id="predpoved">
            {forecast?.map((forecast, index) => (
              <Forecast key={index} forecast={forecast} />))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
