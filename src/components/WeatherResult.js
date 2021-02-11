import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBolt, faCloudRain, faSnowflake, faCloud, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import ForecastTime from './ForecastTime';
import Moment from 'moment';

function WeatherResult({ weatherInfo }) {

    console.log('weather result');
    console.log(weatherInfo.forecast);

    const forecasts = weatherInfo.forecast.map((value, index) => {

        return (
            <ForecastTime
                temperature={value.main.temp}
                id={value.id}
                dateTime={Moment(value.dt_txt).format('DD/MM/YYYY HH:mm')}
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

    const scrollToTop = () =>{
        window.scrollTo({top:0,behavior:'smooth'})
    }

    return (
        <div key={weatherInfo["id"]}>

            <div>
                <p>City: {weatherInfo["name"]}</p>
                <p>Temperature: {weatherInfo["temperature"]}°C</p>

                <p>Humidity: {weatherInfo["humidity"]}</p>


                {weatherIcon}
            </div>

            {forecasts}

            <div>
                <FontAwesomeIcon icon={faChevronCircleUp} size={30} onClick={scrollToTop}/>

            </div>


        </div>
    )


}

export default WeatherResult;