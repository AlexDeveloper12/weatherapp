import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calls from '../calls';
import Moment from 'moment';
import SearchCity from './SearchCity';

function WeatherForecast() {

    const [weather, setWeatherData] = useState([]);
    const [searchCity, setSearchCity] = useState('');

    const GetWeatherForecast = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Walsall&units=metric&appid=${calls.key}`)
            .then(response => {
                console.log(response.data);
                setWeatherData(response.data.list);

            })
            .catch(error => {
                console.log('Error getting weather: ' + error);
            })
    }

    useEffect(() => {
        GetWeatherForecast();
    }, []);

    const handleInput = (event) => {
        console.log(event.target.value);
        setSearchCity(event.target.value);
    }

    return (
        <div>

            <SearchCity
                value={searchCity}
                onChangeCity={handleInput}
            />


            {
                weather.map((value, index) => {
                    return (
                        <div style={{ display: 'inline-block' }} key={value.dt}>
                            {Moment(value.dt[0]).format('HH:mm:ss')}
                            <span>{value.temp}</span>
                        </div>
                    )
                })
            }



        </div>
    )


}

export default WeatherForecast;