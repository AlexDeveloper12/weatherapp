import React from 'react';

const ForecastTime = ({ id, temperature, dateTime, hour, icon }) => {

    return (
        <div key={id} style={{pading:10,opacity:0.5,borderRadius:5,margin:10,display:'inline',width:'14%'}}>
            <span>{dateTime}</span>
            <span>{temperature}</span>
        </div>

    )
}

export default ForecastTime;