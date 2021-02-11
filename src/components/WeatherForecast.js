import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calls from '../calls';
import Moment from 'moment';
import SearchCity from './SearchCity';
import swal from 'sweetalert';
import SearchCityError from './SearchCityError';
import WeatherResult from './WeatherResult';


require('dotenv').config({path: __dirname + '/../.env'});

function WeatherForecast() {

    const [weather, setWeatherData] = useState([]);
    const [searchCity, setSearchCity] = useState('');
    const [error, setError] = useState(false);
    const [result, setResult] = useState(false);
    const [forecastInfo, setForecastInfo] = useState('');

    const GetWeatherForecast = (event) => {
        event.preventDefault();
        console.log('Search city is greater than 0')
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const myForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&appid=${apiKey}`;
        const myWeather = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`;

        Promise.all([fetch(myForecast), fetch(myWeather)])
            .then(([forecast, weather]) => {
                return Promise.all([forecast.json(), weather.json()])

            })
            .then(([forecastData, weatherData]) => {

                const weatherInfo = {
                    name: weatherData.name,
                    temperature: weatherData.main.pressure,
                    humidity: weatherData.main.humidity,
                    weathertype: weatherData.weather[0].main,
                    forecast: forecastData.list
                };

                setForecastInfo(forecastData);
                setWeatherData(weatherInfo);

                setError(false);
                setResult(true);
            })
    }

    const handleInput = (event) => {
        console.log(event.target.value);
        setSearchCity(event.target.value);
    }

    return (
        <div>

            <h2 style={{ color: 'white', fontFamily: 'Montserrat', textAlign: 'center' }}>My Weather App</h2>

            <SearchCity
                value={searchCity}
                onChangeCity={handleInput}
                onSubmitCity={GetWeatherForecast}
            />

            {error && <SearchCityError />}

            {result && <WeatherResult weatherInfo={weather} />}





        </div>
    )


}

export default WeatherForecast;