/*
This part of mirror will...
    - Stay on Top Left
    - display weather at current position using openweather API (api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key})
    - Refresh every 10 mins
*/
import React, { Component } from 'react';
import '../../App.css';
class WeatherApp extends Component {
    state = {}
    render() {
        return (<div className="weather-app">WEATHER APP</div>);
    }
}

export default WeatherApp;