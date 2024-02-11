import React, { useEffect, useState } from "react";
import "./dashboard.css";
import searchImage from "./images/search.png";
import humidityImage from "./images/humidity.png";
import windImage from "./images/wind.png";
import cloudImage from "./images/cloudImage.png";

function Dashboard(props) {
  const [city, setCity] = useState("delhi");
  const [input, setInput] = useState("");
  const [humidity, setHumidity] = useState("");
  const [speed, setSpeed] = useState("");
  const [temp, setTemp] = useState("");
  console.log(city);

  let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1d2890e8b5mshd15f4223fef71fap1e159cjsncbeb7aec12f1",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setCity(input);

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setTemp(response.temp);
        setHumidity(response.humidity);
        setSpeed(response.wind_speed);
      })
      .catch(() => console.log("wait"));
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="search">
            <input
              type="text"
              placeholder="Enter your city name."
              //   spellcheck="false"
              onChange={handleInput}
            />
            <button>
              <img
                src={searchImage}
                alt="button-image"
                type="submit"
                onClick={handleSubmit}
              />
            </button>
          </div>
          <div className="whether">
            <img src={cloudImage} className="whether-icon" />
            <h1 className="temp">{temp}°</h1>
            <h2 className="tempk">{temp * 1.8 + 32} °F</h2>
            <h2 className="city">{input}</h2>
          </div>
          <div className="details">
            <div className="col">
              <img src={humidityImage} />
              <div>
                <p className="humidity">{humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={windImage} />
              <div>
                <p className="wind">{speed} K</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          <div style={{marginTop:"15px"}}>
            <a href="/records" style={{textDecoration:"none",color:"white"}}>Previous</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
