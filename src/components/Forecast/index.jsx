import React from 'react';
import '../Forecast/style.css';
import { forecastDate } from '../../transfer/units';
//import { forecastMonth } from '../../transfer/units';
//import { forecastDate } from '../../transfer/units';

const Forecast = ({ forecast }) => {

  return (
    <>
      <div className="forecast">

        <div className="forecast__day">
          {forecast && forecastDate(forecast.dt)}

        </div>

        <div className="forecast__icon">
          {<img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />}

        </div>
        <div className="forecast__temp">{Math.round(forecast.main.temp)} °C</div>
      </div>
    </>
  )

};

export default Forecast;