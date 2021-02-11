import React from 'react';
import styled from 'styled-components';

const WeatherIcon = styled.img`
    display:block;
    height:50px;
    width:50px;
`

const ForecastTime = ({ id, temperature, dateTime, hour, icon }) => {
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    console.log(iconUrl)

    return (
        <div key={id} style={{pading:10,opacity:0.5,borderRadius:5,margin:10,display:'inline',width:'14%'}}>
            <span>{dateTime}</span>
            <span>{temperature}</span>
        </div>

    )
}

export default ForecastTime;