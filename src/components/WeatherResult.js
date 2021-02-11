import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBolt, faCloudRain, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';
import ForecastTime from './ForecastTime';
import Moment from 'moment';

function WeatherResult({ weatherInfo }) {

    console.log('weather result');
    console.log(weatherInfo.forecast);

    const forecasts = weatherInfo.forecast.map((value, index) => {

        console.log('forecasts')
        console.log(value);
        return (
            <ForecastTime
                temperature={value.main.temp}
                id={value.id}
                dateTime={Moment(value.dt_txt).format('DD/MM/YYYY HH')}
                icon={value.weather[0].icon}
            />
        )
    })

    let weatherIcon = '';

    switch (weatherInfo["weathertype"]) {
        case 'Clear':
            weatherIcon = <FontAwesomeIcon icon={faSun} size={"2x"} />
            break;
        case 'Thunderstorm':
            weatherIcon = <FontAwesomeIcon icon={faBolt} size={"2x"} />
            break;
        case 'Drizzle':
            weatherIcon = <FontAwesomeIcon icon={faCloudRain} size={"2x"} />
            break;
        case 'Rain':
            weatherIcon = <FontAwesomeIcon icon={faCloudRain} size={"2x"} />
            break;
        case 'Snow':
            weatherIcon = <FontAwesomeIcon icon={faSnowflake} size={"2x"} />
            break;
        case 'Clouds':
            weatherIcon = <FontAwesomeIcon icon={faCloud} size={"2x"} />
            break;

    }

    return (
        <div key={weatherInfo["id"]}>

            <div>
                <span>City: {weatherInfo["name"]}</span><br />

                <span>Humidity: {weatherInfo["humidity"]}</span>


                {weatherIcon}
            </div>

            {forecasts}


        </div>
    )


}

export default WeatherResult;