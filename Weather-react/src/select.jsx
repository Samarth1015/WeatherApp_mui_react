import TextField from "@mui/material/TextField";

import "./select.css";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Select({ updateData }) {
  let API_KEY = "36fc8c1ea2bfa57c3217a1c055f023ac";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let [city, setCity] = useState("");

  let [err, setErr] = useState(false);

  let handleChange = (event) => {
    try {
      console.log(event.target.value);
      setCity(event.target.value);
    } catch (err) {
      setErr(true);
    }
  };
  let submitCity = async (event) => {
    try {
      event.preventDefault();
      let data = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      data = await data.json();
      return updateData({
        city: data.name,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="select">
      <h1>Weather App</h1>
      <div className="autocomplete">
        <form onSubmit={submitCity}>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            onChange={handleChange}
            value={city}
            required
          />
          <br />
          <br />
          <Button variant="contained" color="success" type="submit">
            Get Data
          </Button>
        </form>
      </div>
      <br />
      {err && <h5 style={{ color: "red" }}>No such place exist!</h5>}
      <div style={{ display: "flex", justifyContent: "center" }}></div>
    </div>
  );
}
