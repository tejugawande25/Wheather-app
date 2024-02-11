import React, { useState } from "react";
import "./dashboard.css";
import search from "./images/search.png";
import rain from "./images/rain.png";
import humidity from "./images/humidity.png";
import wind from "./images/wind.png";

function Dashboard() {
    const[input, setInput] = useState("");

    const handleInput = (e) =>{
        setInput(e.target.value)
    }
    console.log(input);
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
              <img src={search} alt="button-image" type="submit" />
            </button>
          </div>
          <div className="whether">
            <img src={rain} className="whether-icon" />
            <h1 className="temp">22°</h1>
            <h2 className="city">New York</h2>
          </div>
          <div className="details">
            <div className="col">
              <img src={humidity}/>
              <div>
                <p className="humidity">50%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={wind} />
              <div>
                <p className="wind">15 K</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
