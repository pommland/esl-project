/*
This part of mirror will...
    - Stay on Top Left
    - display weather at current position using openweather API (api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key})
    - Refresh every 10 mins
*/
import React, { Component } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'

import Weather from './components/weather';

const API_key = "53953a894d9fba93cfed035190cf4c34";

class WeatherApp extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            maxTemp: undefined,
            minTemp: undefined,
            description: "",
            error: false
        };
        this.weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog",
        }
    }

    componentWillMount() {

        const city = "Bangkok";
        const country = "Thailand";

        const fetchData = async () => {
            if (city !== '' && country !== '') {
                const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)//make API call
                const response = await api_call.json();//parse to JSON

                console.log(response);


                this.setState({
                    city: `${response.name},${response.sys.country}`,
                    celsius: this.toCelsius(response.main.temp),
                    maxTemp: this.toCelsius(response.main.temp_max),
                    minTemp: this.toCelsius(response.main.temp_min),
                    description: response.weather[0].description,
                    error: false
                })
                this.getWeatherIcon(response.weather[0].id)

            }
            else {
                this.setState({
                    error: true
                })
            }
        }
        fetchData();
    }

    getWeatherIcon(rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                this.setState({ icon: this.weatherIcon.Thunderstorm })
                break;
            case rangeId >= 300 && rangeId <= 321:
                this.setState({ icon: this.weatherIcon.Drizzle })
                break;
            case rangeId >= 500 && rangeId <= 531:
                this.setState({ icon: this.weatherIcon.Rain })
                break;
            case rangeId >= 600 && rangeId <= 622:
                this.setState({ icon: this.weatherIcon.Snow })
                break;
            case rangeId >= 700 && rangeId <= 781:
                this.setState({ icon: this.weatherIcon.Atmosphere })
                break;
            case rangeId === 800:
                this.setState({ icon: this.weatherIcon.Clear })
                break;
            case rangeId >= 801 && rangeId <= 804:
                this.setState({ icon: this.weatherIcon.Clouds })
                break;
            default:
                this.setState({ icon: this.weatherIcon.Clouds })
        }
    }

    toCelsius(temp) {
        const cel = Math.floor(temp - 273.15)
        return cel
    }

    render() {
        return (
            <div className="weather-app">
                <Weather
                    city={this.state.city}
                    celsius={this.state.celsius}
                    minTemp={this.state.minTemp}
                    maxTemp={this.state.maxTemp}
                    description={this.state.description}
                    weatherIcon={this.state.icon}
                />
            </div>);
    }
}

export default WeatherApp;