import React, { useState } from 'react';

import DisplayWeather from '../weathercomponent/DisplayWeather'

import '../weathercomponent/weather.css'

function Weather() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
      city: "",
      country: "",
    });
  
    const APIKEY = "d91e94daf44340a87b83392d46cfc5e7";
    async function weatherData(e) {
      e.preventDefault();
      if (form.city == "") {
        alert("Please Add City & Country");
      } else {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
          .then((res) => res.json())
          .then((data) => data);
  
        setWeather({ data: data });
      }
    }
  
    const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
  
      if (name == "city") {
        setForm({ ...form, city: value });
      }
      if (name == "country") {
        setForm({ ...form, country: value });
      }
    };
    return (
      <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <form className="form">
          <input className="input"
            type="text"
            placeholder="City"
            name="city"
            onChange={(e) => handleChange(e)}
          />
             &nbsp; &nbsp; 
         
          <input className="input"
            type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => handleChange(e)}
          />
          &nbsp;&nbsp;
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Get Weather
          </button>
        </form>

        {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
        
    );
    }
    export default Weather;