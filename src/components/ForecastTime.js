import React from 'react';
import styled from 'styled-components';

const WeatherIcon = styled.img`
    display:block;
    height:50px;
    width:50px;
    margin:0 auto;
`

const ForecastTime = ({ id, temperature, dateTime, hour, icon }) => {
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    console.log(iconUrl)

    return (
        <div key={id} style={{ padding: 10, borderRadius: 5, margin: 10, display: 'inline-block', width: '14%',overflow:'hidden' }}>
            {/* <span>{dateTime}</span> */}
            <span>{temperature}</span>
            <WeatherIcon src={iconUrl} />
        </div>

    )
}

export default ForecastTime;